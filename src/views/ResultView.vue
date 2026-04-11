<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTestStore } from '../stores/testStore'

const router = useRouter()
const store = useTestStore()

const result = computed(() => store.result)
const imgLoaded = ref(false)
const showShareModal = ref(false)
const copySuccess = ref(false)

function onImgLoad() {
  imgLoaded.value = true
}

function onImgError() {
  imgLoaded.value = false
}

function restart() {
  store.reset()
  router.push('/')
}

function goHome() {
  router.push('/')
}

function goList() {
  router.push('/list')
}

function openShareModal() {
  showShareModal.value = true
  copySuccess.value = false
}

function closeShareModal() {
  showShareModal.value = false
}

async function copyLink() {
  const text = `我是大连队DLTI中的${result.value?.type}型！${result.value?.subtitle} - ${result.value?.description?.slice(0, 30)}...\n\n来测测你是哪种大连球迷：https://dlti.pages.dev/`

  try {
    await navigator.clipboard.writeText(text)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    copySuccess.value = false
    alert('复制失败，请长按复制以下内容：\n\n' + text)
  }
}
</script>

<template>
  <div class="result-page" v-if="result">
    <div class="result-card" :style="{ '--primary': result.colors.primary, '--accent': result.colors.accent }">
      <div class="avatar-section">
        <div class="type-avatar">
          <img
            :src="result.image"
            :alt="result.name"
            @load="onImgLoad"
            @error="onImgError"
            :class="{ loaded: imgLoaded }"
          />
          <div v-if="!imgLoaded" class="type-avatar-fallback" :style="{ background: result.colors.primary }">
            <span>{{ result.type }}</span>
          </div>
        </div>
      </div>

      <h1 class="name">{{ result.name }}</h1>
      <p class="subtitle">{{ result.subtitle }}</p>

      <div class="traits">
        <span v-for="trait in result.traits" :key="trait" class="trait-tag">
          {{ trait }}
        </span>
      </div>

      <p class="description">{{ result.description }}</p>

      <div class="quote">
        <span class="quote-mark">"</span>
        {{ result.quote }}
      </div>

      <div class="strengths">
        <h3>你的特点</h3>
        <div class="strength-list">
          <div v-for="s in result.strengths" :key="s" class="strength-item">
            <span class="check">✓</span>
            {{ s }}
          </div>
        </div>
      </div>

      <div class="scores-section">
        <h3>维度分析</h3>
        <div class="scores-grid">
          <div
            v-for="(score, key) in result.scoresDisplay"
            :key="key"
            class="score-item"
            :class="{ locked: score.type === 'I' }"
          >
            <div class="score-header">
              <span class="score-name">{{ score.name }}</span>
              <span class="score-value">{{ score.type === 'I' ? '?' : score.value >= 0 ? '+' + score.value : score.value }}</span>
            </div>
            <div class="score-bar">
              <div
                class="score-fill"
                :style="{ width: score.type === 'I' ? '0%' : Math.min(Math.abs(score.value) * 10, 100) + '%' }"
              ></div>
            </div>
            <div class="score-type">{{ score.type === 'I' ? '???' : score.type }}</div>
          </div>
        </div>
      </div>

      <!-- 页面内边距，确保内容不被底部按钮遮挡 -->
      <div class="bottom-spacer"></div>
    </div>

    <!-- 固定底部按钮 -->
    <div class="fixed-actions">
      <div class="actions">
        <button class="action-btn secondary" @click="goHome">
          <span class="icon">←</span>
          返回首页
        </button>
        <button class="action-btn secondary" @click="goList">
          <span class="icon">☰</span>
          查看全部
        </button>
      </div>
      <div class="actions">
        <button class="action-btn primary" @click="openShareModal">
          <span class="icon">↗</span>
          分享结果
        </button>
        <button class="action-btn secondary" @click="restart">
          <span class="icon">↺</span>
          重新测试
        </button>
      </div>
    </div>

    <!-- 分享弹窗 -->
    <Teleport to="body">
      <div v-if="showShareModal" class="share-overlay" @click="closeShareModal">
        <div class="share-modal" @click.stop>
          <button class="close-btn" @click="closeShareModal">×</button>

          <h2>分享给朋友</h2>
          <p class="share-desc">点击下方按钮复制内容，分享给朋友一起测试</p>

          <div class="share-preview">
            <div class="share-avatar">
              <img :src="result.image" :alt="result.name" />
            </div>
            <div class="share-content">
              <p class="share-type">我是{{ result.name }}</p>
              <p class="share-text">{{ result.description?.slice(0, 50) }}...</p>
            </div>
          </div>

          <button
            class="copy-btn"
            :class="{ success: copySuccess }"
            @click="copyLink"
          >
            {{ copySuccess ? '✓ 已复制' : '点击复制' }}
          </button>

          <p class="share-link">https://dlti.pages.dev/</p>
        </div>
      </div>
    </Teleport>
  </div>

  <div class="no-result" v-else>
    <p>没有找到测试结果</p>
    <button @click="restart">返回首页</button>
  </div>
</template>

<style scoped>
.result-page {
  min-height: 100vh;
  min-height: 100dvh;
  padding: 1.5rem;
  padding-bottom: 8rem;
  background: #f5f6f8;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.result-card {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  animation: slideUp 0.4s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.avatar-section {
  margin-bottom: 0.75rem;
}

.type-avatar {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #f5f5f5;
}

.type-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.type-avatar img.loaded {
  opacity: 1;
}

.type-avatar-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.type-avatar-fallback span {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.traits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.trait-tag {
  padding: 0.3rem 0.75rem;
  background: #f5f5f5;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  text-align: left;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}

.quote {
  position: relative;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.quote-mark {
  position: absolute;
  top: 0.25rem;
  left: 0.75rem;
  font-size: 2rem;
  color: var(--accent);
  opacity: 0.4;
  line-height: 1;
}

.quote {
  font-style: italic;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.strengths {
  text-align: left;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}

.strengths h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.strength-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
}

.strength-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.strength-item .check {
  color: var(--accent);
  font-weight: 700;
}

.scores-section {
  text-align: left;
  margin-bottom: 1.25rem;
  padding: 0 0.5rem;
}

.scores-section h3 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.scores-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.score-item {
  background: #f8f9fa;
  padding: 0.6rem;
  border-radius: 8px;
}

.score-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}

.score-name {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.score-value {
  font-size: 0.7rem;
  color: var(--accent);
  font-weight: 600;
}

.score-bar {
  height: 3px;
  background: #e5e5e5;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.score-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 2px;
}

.score-type {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

.score-item.locked {
  filter: blur(3px);
  pointer-events: none;
}

.score-item.locked .score-fill {
  background: #ccc;
}

.bottom-spacer {
  height: 1rem;
}

.fixed-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 1rem 1.5rem;
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.actions {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.actions:last-child {
  margin-bottom: 0;
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
  -webkit-tap-highlight-color: transparent;
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

.action-btn.secondary:active {
  background: #eee;
}

.icon {
  font-size: 1.1rem;
}

.no-result {
  text-align: center;
  color: var(--text-primary);
  padding: 4rem 2rem;
}

.no-result button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* 移动端适配 */
@media (max-width: 375px) {
  .result-page {
    padding: 1rem;
  }

  .result-card {
    padding: 1.25rem;
    border-radius: 16px;
  }

  .type-avatar {
    width: 100px;
    height: 100px;
  }

  .name {
    font-size: 1.1rem;
  }

  .description {
    font-size: 0.85rem;
  }

  .action-btn {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}

/* 分享弹窗 */
.share-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
}

.share-modal {
  background: #fff;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 320px;
  text-align: center;
  position: relative;
}

.share-modal .close-btn {
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

.share-modal h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.share-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.share-preview {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 1.25rem;
  text-align: left;
}

.share-avatar {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.share-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.share-content {
  flex: 1;
  min-width: 0;
}

.share-type {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.share-text {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.copy-btn {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}

.copy-btn.success {
  background: linear-gradient(135deg, #10b981, #34d399);
}

.copy-link {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
