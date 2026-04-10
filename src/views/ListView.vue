<script setup>
import { useRouter } from 'vue-router'
import { useTestStore } from '../stores/testStore'
import { personalities } from '../config/personalities'

const router = useRouter()
const store = useTestStore()

const personalityList = Object.entries(personalities).map(([key, p]) => ({ key, ...p }))

function goHome() {
  store.reset()
  router.push('/')
}

function goResult() {
  router.push('/result')
}

function goTest() {
  store.reset()
  router.push('/test')
}
</script>

<template>
  <div class="list-page">
    <div class="header">
      <h1>全部类型</h1>
      <p>12种大连球迷类型</p>
    </div>

    <div class="types-grid">
      <div
        v-for="item in personalityList"
        :key="item.key"
        class="type-card"
        :class="{ locked: item.key === 'I' }"
        :style="{ '--primary': item.colors.primary }"
      >
        <div class="type-avatar">
          <img :src="item.image" :alt="item.name" />
        </div>
        <div class="type-badge">{{ item.key }}</div>
        <div class="type-name">{{ item.name }}</div>
        <div class="type-subtitle">{{ item.subtitle }}</div>

        <div v-if="item.key === 'I'" class="lock-overlay">
          <span class="lock-icon">🔒</span>
          <span class="lock-text">隐藏款</span>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="action-btn primary" @click="goTest">
        <span class="icon">↺</span>
        开始测试
      </button>
      <button v-if="store.result" class="action-btn secondary" @click="goResult">
        <span class="icon">←</span>
        我的结果
      </button>
    </div>
  </div>
</template>

<style scoped>
.list-page {
  min-height: 100vh;
  min-height: 100dvh;
  padding: 1.5rem;
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
  background: #f5f6f8;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.header p {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.type-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;
}

.type-card:active {
  transform: scale(0.96);
}

.type-card.locked {
  filter: blur(4px);
  pointer-events: none;
}

.type-card.locked .lock-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.lock-icon {
  font-size: 1.5rem;
}

.lock-text {
  font-size: 0.7rem;
  color: #fff;
  font-weight: 600;
}

.type-avatar {
  width: 50px;
  height: 50px;
  margin: 0 auto 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary);
}

.type-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.type-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
}

.type-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.1rem;
}

.type-subtitle {
  font-size: 0.65rem;
  color: var(--text-muted);
  line-height: 1.2;
}

.actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn:active {
  transform: scale(0.98);
}

.action-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: #fff;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.action-btn.secondary {
  background: #f5f5f5;
  color: var(--text-secondary);
}

.icon {
  font-size: 1.1rem;
}

/* 移动端适配 */
@media (max-width: 375px) {
  .types-grid {
    gap: 0.5rem;
  }

  .type-card {
    padding: 0.75rem 0.25rem;
  }

  .type-avatar {
    width: 40px;
    height: 40px;
  }
}
</style>