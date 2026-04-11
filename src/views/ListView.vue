<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTestStore } from '../stores/testStore'
import { personalities } from '../config/personalities'

const router = useRouter()
const store = useTestStore()

const personalityList = Object.entries(personalities).map(([key, p]) => ({ key, ...p }))
const selectedType = ref(null)

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

function showDetail(item) {
  selectedType.value = item
}

function closeDetail() {
  selectedType.value = null
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
        :style="{ '--primary': item.colors.primary }"
        @click="showDetail(item)"
      >
        <div class="type-avatar">
          <img :src="item.image" :alt="item.name" />
        </div>
        <div class="type-badge">{{ item.key }}</div>
        <div class="type-name">{{ item.name }}</div>
        <div class="type-subtitle">{{ item.subtitle }}</div>
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

    <!-- 详情弹窗 -->
    <Teleport to="body">
      <div v-if="selectedType" class="detail-overlay" @click="closeDetail">
        <div class="detail-modal" @click.stop>
          <button class="close-btn" @click="closeDetail">×</button>

          <div class="detail-header">
            <div class="detail-avatar">
              <img :src="selectedType.image" :alt="selectedType.name" />
            </div>
            <div class="detail-badge">{{ selectedType.key }}</div>
          </div>

          <h2 class="detail-name">{{ selectedType.name }}</h2>
          <p class="detail-subtitle">{{ selectedType.subtitle }}</p>

          <div class="detail-desc">{{ selectedType.description }}</div>

          <div class="detail-section">
            <h3>特征</h3>
            <div class="detail-tags">
              <span v-for="trait in selectedType.traits" :key="trait" class="trait-tag">
                {{ trait }}
              </span>
            </div>
          </div>

          <div class="detail-section">
            <h3>优点</h3>
            <div class="detail-strengths">
              <span v-for="strength in selectedType.strengths" :key="strength" class="strength-tag">
                {{ strength }}
              </span>
            </div>
          </div>

          <div class="detail-section">
            <h3>适配</h3>
            <p class="detail-compat">{{ selectedType.compatibility }}</p>
          </div>

          <div class="detail-quote">
            <span class="quote-mark">"</span>
            {{ selectedType.quote }}
            <span class="quote-mark">"</span>
          </div>
        </div>
      </div>
    </Teleport>
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.type-card:active {
  transform: scale(0.96);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.type-avatar {
  width: 60px;
  height: 60px;
  margin: 0 auto 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary);
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

/* 详情弹窗 */
.detail-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
}

.detail-modal {
  background: #fff;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 360px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border: none;
  background: #f0f0f0;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.detail-header {
  text-align: center;
  margin-bottom: 1rem;
}

.detail-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 0.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--primary, #3b82f6);
}

.detail-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-badge {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary, #3b82f6);
}

.detail-name {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.detail-subtitle {
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.detail-desc {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.detail-section {
  margin-bottom: 1rem;
}

.detail-section h3 {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.detail-tags, .detail-strengths {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.trait-tag, .strength-tag {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background: #f0f4ff;
  color: #3b82f6;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.strength-tag {
  background: #fef3e2;
  color: #f59e0b;
}

.detail-compat {
  font-size: 0.9rem;
  color: var(--text-primary);
}

.detail-quote {
  margin-top: 1.25rem;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 12px;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;
}

.quote-mark {
  font-size: 1.25rem;
  opacity: 0.7;
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
    width: 50px;
    height: 50px;
  }

  .detail-avatar {
    width: 80px;
    height: 80px;
  }
}
</style>