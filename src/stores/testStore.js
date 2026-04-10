import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { questions } from '../config/questions'
import { personalities } from '../config/personalities'

export const useTestStore = defineStore('test', () => {
  // 状态
  const currentIndex = ref(0)
  const answers = ref({})
  const isCompleted = ref(false)

  // 计算属性
  const currentQuestion = computed(() => questions[currentIndex.value])
  const totalQuestions = computed(() => questions.length)
  const progress = computed(() => ((currentIndex.value + 1) / totalQuestions.value) * 100)
  const isFirstQuestion = computed(() => currentIndex.value === 0)
  const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1)
  const hasAnswered = computed(() => currentQuestion.value && answers.value[currentQuestion.value.id] !== undefined)

  const answeredCount = computed(() => Object.keys(answers.value).length)
  const unansweredIndices = computed(() => {
    return questions.reduce((acc, q, idx) => {
      if (answers.value[q.id] === undefined) acc.push(idx)
      return acc
    }, [])
  })

  // 结果计算
  const result = computed(() => {
    if (!isCompleted.value) return null

    const scores = { EI: 0, SN: 0, TF: 0, JP: 0 }

    Object.entries(answers.value).forEach(([qId, optionIndex]) => {
      const q = questions.find(q => q.id === Number(qId))
      if (q && q.options[optionIndex]) {
        const scores_ = q.options[optionIndex].scores || {}
        Object.entries(scores_).forEach(([dim, val]) => {
          if (scores[dim] !== undefined) scores[dim] += val
        })
      }
    })

    // 根据分数计算类型
    const type = (
      (scores.EI >= 0 ? 'E' : 'I') +
      (scores.SN >= 0 ? 'S' : 'N') +
      (scores.TF >= 0 ? 'T' : 'F') +
      (scores.JP >= 0 ? 'J' : 'P')
    )

    return {
      type,
      ...personalities[type],
      scores,
      scoresDisplay: {
        EI: { name: '外向/内向', value: scores.EI, type: scores.EI >= 0 ? 'E' : 'I' },
        SN: { name: '感觉/直觉', value: scores.SN, type: scores.SN >= 0 ? 'S' : 'N' },
        TF: { name: '思考/情感', value: scores.TF, type: scores.TF >= 0 ? 'T' : 'F' },
        JP: { name: '判断/知觉', value: scores.JP, type: scores.JP >= 0 ? 'J' : 'P' }
      }
    }
  })

  // 方法
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

  function jumpToUnanswered() {
    if (unansweredIndices.value.length > 0) {
      currentIndex.value = unansweredIndices.value[0]
    }
  }

  function reset() {
    currentIndex.value = 0
    answers.value = {}
    isCompleted.value = false
  }

  return {
    // 状态
    currentIndex,
    answers,
    isCompleted,
    // 计算
    currentQuestion,
    totalQuestions,
    progress,
    isFirstQuestion,
    isLastQuestion,
    hasAnswered,
    answeredCount,
    unansweredIndices,
    result,
    // 方法
    selectOption,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    jumpToUnanswered,
    reset
  }
})
