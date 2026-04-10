<script setup>
import { useRouter } from 'vue-router'
import { useTestStore } from '../stores/testStore'

const router = useRouter()
const store = useTestStore()

function startTest() {
  store.reset()
  router.push('/test')
}
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="hero">
        <div class="hero-image">
          <img src="/images/hero-placeholder.svg" alt="林书豪" />
        </div>
        <h1 class="title">DL球迷 MBTI 测试</h1>
        <p class="subtitle">探索你与Jeremy Lin的灵魂共鸣</p>
      </div>

      <div class="intro">
        <div class="intro-item">
          <span class="icon">40</span>
          <span class="text">道测试题</span>
        </div>
        <div class="intro-item">
          <span class="icon">16</span>
          <span class="text">种人格类型</span>
        </div>
        <div class="intro-item">
          <span class="icon">1</span>
          <span class="text">个灵魂契合</span>
        </div>
      </div>

      <button class="start-btn" @click="startTest">
        开始测试
        <span class="arrow">→</span>
      </button>

      <p class="tip">约需 5 分钟</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: linear-gradient(180deg, #fff 0%, #f0f2f5 100%);
}

.container {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.hero {
  margin-bottom: 2.5rem;
}

.hero-image {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
  border: 4px solid #fff;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 400;
}

.intro {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 1.25rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.intro-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.intro-item .icon {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.intro-item .text {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.start-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6 0%, #ff6b6b 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(233, 69, 96, 0.3);
  -webkit-tap-highlight-color: transparent;
}

.start-btn:active {
  transform: scale(0.98);
}

.start-btn .arrow {
  transition: transform 0.3s ease;
}

.start-btn:active .arrow {
  transform: translateX(4px);
}

.tip {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* 移动端适配 */
@media (max-width: 375px) {
  .home {
    padding: 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .intro {
    gap: 1rem;
    padding: 1rem;
  }

  .intro-item .icon {
    font-size: 1.25rem;
  }

  .hero-image {
    width: 120px;
    height: 120px;
  }
}
</style>
