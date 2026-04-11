import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { questions } from '../config/questions'
import { personalities } from '../config/personalities'

// localStorage key
const STORAGE_KEY = 'dlti_test_state'

// 加载缓存
function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (e) {
    console.warn('Failed to load state:', e)
  }
  return null
}

// 保存缓存
function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.warn('Failed to save state:', e)
  }
}

export const useTestStore = defineStore('test', () => {
  // 从缓存加载初始状态
  const savedState = loadFromStorage()
  const currentIndex = ref(savedState?.currentIndex || 0)
  const answers = ref(savedState?.answers || {})
  const isCompleted = ref(savedState?.isCompleted || false)

  const currentQuestion = computed(() => questions[currentIndex.value])
  const totalQuestions = computed(() => questions.length)
  const progress = computed(() => ((currentIndex.value + 1) / totalQuestions.value) * 100)
  const isFirstQuestion = computed(() => currentIndex.value === 0)
  const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1)
  const hasAnswered = computed(() => currentQuestion.value && answers.value[currentQuestion.value.id] !== undefined)

  const answeredCount = computed(() => Object.keys(answers.value).length)

  // 结果计算 - 12种类型
  const result = computed(() => {
    if (!isCompleted.value) return null

    // 特殊类型 (需要>=4才触发)
    const specialNames = ['王大爷', '辽宁铁人', '冠军球迷', '远征军', '社交球迷', '收藏癖', '云球迷']
    // 基础分值对应的类型名
    const baseNames = { 'A': '热血派', 'B': '理性派', 'C': '战斗派', 'D': '死忠派', 'E': '中立派' }

    // 统计
    const tagCounts = {}
    const scoreCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 }

    Object.entries(answers.value).forEach(([qId, optionIndex]) => {
      const q = questions.find(q => q.id === Number(qId))
      if (q && q.options[optionIndex]) {
        const opt = q.options[optionIndex]
        if (opt.tags) opt.tags.forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1 })
        if (scoreCounts[opt.scores] !== undefined) scoreCounts[opt.scores]++
      }
    })

    // 构建scoresDisplay
    function buildScoresDisplay(counts) {
      return {
        A: { name: '热血派', value: counts['热血派'] || 0, type: 'A' },
        B: { name: '理性派', value: counts['理性派'] || 0, type: 'B' },
        C: { name: '战斗派', value: counts['战斗派'] || 0, type: 'C' },
        D: { name: '死忠派', value: counts['死忠派'] || 0, type: 'D' },
        E: { name: '中立派', value: counts['中立派'] || 0, type: 'E' },
        F: { name: '远征军', value: counts['远征军'] || 0, type: 'F' },
        G: { name: '社交球迷', value: counts['社交球迷'] || 0, type: 'G' },
        H: { name: '收藏癖', value: counts['收藏癖'] || 0, type: 'H' },
        I: { name: '辽宁铁人', value: counts['辽宁铁人'] || 0, type: 'I' },
        J: { name: '冠军球迷', value: counts['冠军球迷'] || 0, type: 'J' },
        K: { name: '王大爷', value: counts['王大爷'] || 0, type: 'K' },
        L: { name: '云球迷', value: counts['云球迷'] || 0, type: 'L' }
      }
    }

    // 1. 特殊类型：辽宁铁人/收藏癖>=3，其他>=4
    let specialType = null, specialCount = 0
    for (const n of specialNames) {
      let threshold = 4
      if (n === '辽宁铁人' || n === '收藏癖') threshold = 3
      if (tagCounts[n] >= threshold && tagCounts[n] > specialCount) {
        specialCount = tagCounts[n]
        specialType = n
      }
    }
    if (specialType) {
      const id = Object.entries(personalities).find(([i, p]) => p.name === specialType)?.[0]
      if (id && personalities[id]) {
        return { type: id, ...personalities[id], matchCount: specialCount, scoresDisplay: buildScoresDisplay(tagCounts) }
      }
    }

    // 2. 所有类型按最多匹配（需要>=2）
    const allNames = [
      '热血派', '理性派', '战斗派', '死忠派', '中立派',
      '远征军', '社交球迷', '收藏癖', '云球迷'
    ]

    let maxTag = null, maxCount = 0
    for (const n of allNames) {
      if ((tagCounts[n] || 0) > maxCount) {
        maxCount = tagCounts[n]
        maxTag = n
      }
    }

    if (maxTag && maxCount >= 2) {
      const id = Object.entries(personalities).find(([i, p]) => p.name === maxTag)?.[0]
      if (id && personalities[id]) {
        return { type: id, ...personalities[id], matchCount: maxCount, scoresDisplay: buildScoresDisplay(tagCounts) }
      }
    }

    // 3. 用基础分值多数决
    let maxScore = 'A', maxScoreCount = 0
    Object.entries(scoreCounts).forEach(([k, v]) => { if (v > maxScoreCount) { maxScoreCount = v; maxScore = k } })

    if (baseNames[maxScore] && personalities[maxScore]) {
      return {
        type: maxScore,
        ...personalities[maxScore],
        matchCount: maxScoreCount,
        scoresDisplay: buildScoresDisplay({ ...tagCounts, ...scoreCounts })
      }
    }

    return { type: 'A', ...personalities['A'], matchCount: 0, scoresDisplay: buildScoresDisplay({}) }
  })

  function selectOption(optionIndex) {
    if (currentQuestion.value) {
      answers.value[currentQuestion.value.id] = optionIndex
    }
  }

  function nextQuestion() {
    if (isLastQuestion.value) {
      isCompleted.value = true
    } else {
      currentIndex.value++
    }
  }

  function prevQuestion() {
    if (!isFirstQuestion.value) {
      currentIndex.value--
    }
  }

  function goToQuestion(index) {
    if (index >= 0 && index < totalQuestions.value) {
      currentIndex.value = index
    }
  }

  function reset() {
    currentIndex.value = 0
    answers.value = {}
    isCompleted.value = false
    // 清除缓存
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      console.warn('Failed to clear state:', e)
    }
  }

  // 监听状态变化，自动保存缓存
  watch(
    () => ({ currentIndex: currentIndex.value, answers: answers.value, isCompleted: isCompleted.value }),
    (state) => {
      saveToStorage(state)
    },
    { deep: true }
  )

  return {
    currentIndex, answers, isCompleted, currentQuestion, totalQuestions, progress,
    isFirstQuestion, isLastQuestion, hasAnswered, answeredCount, result,
    selectOption, nextQuestion, prevQuestion, goToQuestion, reset
  }
})