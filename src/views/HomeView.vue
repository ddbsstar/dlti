<script setup>
import { useRouter } from 'vue-router'
import { useTestStore } from '../stores/testStore'

const router = useRouter()
const store = useTestStore()

function startTest() {
  store.reset()
  router.push('/test')
}

function goResult() {
  router.push('/result')
}

function goList() {
  router.push('/list')
}
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="hero">
        <div class="hero-image">
          <img src="/images/hero-placeholder.svg" alt="大连队" />
        </div>
        <h1 class="title">大连球迷 DLTI 测试</h1>
        <p class="subtitle">我们相信世界上存在不同种类的大连球迷</p>
        <p class="subtitle">此网页采用CJFX（瞎鸡额分析）技术进行分类</p>
      </div>

      <div class="intro">
        <div class="intro-item">
          <span class="icon">20</span>
          <span class="text">道测试题</span>
        </div>
        <div class="intro-item">
          <span class="icon">12</span>
          <span class="text">种球迷类型</span>
        </div>
        <div class="intro-item">
          <span class="icon">1</span>
          <span class="text">您的类型</span>
        </div>
      </div>

      <!-- 如果有缓存结果，显示继续按钮 -->
      <template v-if="store.isCompleted && store.result">
        <button class="start-btn" @click="goResult">
          查看结果
          <span class="arrow">→</span>
        </button>
        <div class="resume-btns">
          <button class="text-btn" @click="startTest">重新测试</button>
          <button class="text-btn" @click="goList">查看全部</button>
        </div>
      </template>
      <!-- 如果有缓存但未完成，显示继续测试 -->
      <template v-else-if="Object.keys(store.answers).length > 0">
        <button class="start-btn" @click="startTest">
          继续测试
          <span class="arrow">→</span>
        </button>
        <div class="resume-btns">
          <button class="text-btn" @click="startTest">重新开始</button>
          <button class="text-btn" @click="goList">查看全部</button>
        </div>
      </template>
      <template v-else>
        <button class="start-btn" @click="startTest">
          开始测试
          <span class="arrow">→</span>
        </button>
      </template>

      <p class="tip">约需 2 分钟</p>
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

.resume-btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.75rem;
}

.text-btn {
  background: none;
  border: none;
  font-size: 0.85rem;
  color: var(--text-muted);
  cursor: pointer;
  text-decoration: underline;
}

.text-btn:active {
  opacity: 0.7;
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
