<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTestStore } from '../stores/testStore'

const router = useRouter()
const store = useTestStore()

const selectedOption = computed(() => {
  if (!store.currentQuestion) return undefined
  return store.answers[store.currentQuestion.id]
})

function selectOption(index) {
  store.selectOption(index)
  // 选择后自动下一题
  if (!store.isLastQuestion) {
    setTimeout(() => {
      store.nextQuestion()
    }, 150)
  }
}

function handleNext() {
  if (store.isLastQuestion) {
    store.nextQuestion()
    router.push('/result')
  } else {
    store.nextQuestion()
  }
}

function handlePrev() {
  store.prevQuestion()
}
</script>

<template>
  <div class="test-page">
    <header class="header">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: store.progress + '%' }"></div>
      </div>
      <div class="progress-info">
        <span class="current">{{ store.currentIndex + 1 }}</span>
        <span class="separator">/</span>
        <span class="total">{{ store.totalQuestions }}</span>
      </div>
    </header>

    <main class="main">
      <div class="question-card">
        <h2 class="question-text">{{ store.currentQuestion?.text }}</h2>

        <div class="options">
          <button
            v-for="(option, index) in store.currentQuestion?.options"
            :key="index"
            :class="['option-btn', { selected: selectedOption === index }]"
            @click="selectOption(index)"
          >
            <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
            <span class="option-text">{{ option.text }}</span>
          </button>
        </div>
      </div>
    </main>

    <footer class="footer">
      <button
        class="nav-btn prev"
        :class="{ disabled: store.isFirstQuestion }"
        :disabled="store.isFirstQuestion"
        @click="handlePrev"
      >
        <span class="arrow">←</span>
      </button>

      <div class="dots">
        <span
          v-for="(_, index) in store.totalQuestions"
          :key="index"
          :class="['dot', {
            active: index === store.currentIndex,
            answered: store.answers[store.currentQuestion?.id] !== undefined && index === store.currentIndex
          }]"
        />
      </div>

      <button
        class="nav-btn next"
        :class="{ disabled: !store.hasAnswered }"
        :disabled="!store.hasAnswered"
        @click="handleNext"
      >
        {{ store.isLastQuestion ? '完成' : '→' }}
      </button>
    </footer>
  </div>
</template>

<style scoped>
.test-page {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: #f5f6f8;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 1rem 0.75rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.progress-bar {
  height: 3px;
  background: #eee;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.progress-info {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.85rem;
}

.progress-info .current {
  color: var(--primary);
  font-weight: 600;
}

.progress-info .separator,
.progress-info .total {
  color: var(--text-muted);
}

.main {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1.25rem;
  padding-bottom: 100px;
}

.question-card {
  width: 100%;
  max-width: 500px;
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.question-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  width: 100%;
  padding: 1rem;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  -webkit-tap-highlight-color: transparent;
}

.option-btn:active {
  transform: scale(0.99);
}

.option-btn:hover {
  border-color: #ddd;
}

.option-btn.selected {
  background: rgba(59, 130, 246, 0.08);
  border-color: var(--primary);
}

.option-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #f5f5f5;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.option-btn.selected .option-letter {
  background: var(--primary);
  color: #fff;
}

.option-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  padding-top: 0.125rem;
}

.option-btn.selected .option-text {
  color: var(--text-primary);
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
  background: #fff;
  border-top: 1px solid #eee;
  z-index: 100;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 1.25rem;
  color: #fff;
  background: #ddd;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

.nav-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.nav-btn.prev {
  background: #f0f0f0;
  color: var(--text-muted);
}

.nav-btn.prev:hover:not(:disabled) {
  background: #e5e5e5;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-btn.next {
  background: var(--primary);
}

.nav-btn.next:disabled {
  background: #bfdbfe;
}

.dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  max-width: 200px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ddd;
  transition: all 0.2s ease;
}

.dot.active {
  background: var(--primary);
  transform: scale(1.3);
}

.dot.answered {
  background: var(--primary);
  opacity: 0.6;
}

/* 移动端适配 */
@media (max-width: 375px) {
  .question-text {
    font-size: 1.1rem;
  }

  .option-btn {
    padding: 0.875rem;
  }

  .option-text {
    font-size: 0.9rem;
  }

  .option-letter {
    width: 26px;
    height: 26px;
    font-size: 0.8rem;
  }
}

@media (min-width: 768px) {
  .main {
    padding: 2rem;
    padding-bottom: 120px;
  }

  .option-btn {
    padding: 1.25rem;
  }

  .option-text {
    font-size: 1rem;
  }
}
</style>
