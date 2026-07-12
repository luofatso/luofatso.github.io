<template>
  <div class="bm-landing" ref="landingRef">
    <!-- ================================================================== -->
    <!--  Hero                                                                 -->
    <!-- ================================================================== -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-noise"></div>

      <!-- 浮动光斑 -->
      <div class="orb orb--1"></div>
      <div class="orb orb--2"></div>
      <div class="orb orb--3"></div>

      <!-- 浮动音符粒子 -->
      <span
        v-for="n in 20"
        :key="n"
        class="note-particle"
        :style="noteStyle(n)"
      >{{ notes[n % 4] }}</span>

      <div class="hero-content">
        <div class="hero-badge reveal">— 跨平台音乐播放器 —</div>
        <h1 class="hero-title reveal">
          <span class="gradient-text">baby音乐</span>
        </h1>
        <p class="hero-sub reveal">致不忘初心的你</p>
        <p class="hero-desc reveal">
          这不是儿歌，而是你面对世界那份最初的初心<br/>
          移动端 + 桌面端，纯净统一的聆听体验
        </p>
        <div class="hero-cta reveal">
          <a class="cta-btn cta-btn--fill"
            @click="handleDownload('/baby_music.apk')">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            Android 下载
          </a>
          <a class="cta-btn cta-btn--outline"
            @click="handleDownload('/baby_music_pc.exe')">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            桌面版 下载
          </a>
        </div>
        <p class="hero-ver reveal">v2.2.2 &nbsp;·&nbsp; v2.0.1</p>
        <p class="hero-disclaimer reveal">* 个人兴趣学习项目，下载使用自行承担风险，传播导致的任何法律风险概不负责</p>
      </div>

      <!-- 滚动提示 -->
      <div class="scroll-hint">
        <span></span>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  两端体验                                                              -->
    <!-- ================================================================== -->
    <section class="dual-section">
      <div class="dual-header reveal">
        <h2>移动端 + 桌面端<span class="dot">.</span></h2>
        <p>两端一致的核心体验，不同形态，同样纯净</p>
      </div>

      <div class="duo-mockups reveal" ref="galleryRef">
        <!-- 手机 -->
        <div class="phone-mock">
          <a href="/baby_music/app.jpg" class="shot-link shot-link--phone">
            <img :src="'/baby_music/app.jpg'" alt="baby音乐移动端" />
          </a>
          <p class="mock-label">Flutter · Android</p>
        </div>

        <!-- 桌面 -->
        <div class="desktop-mock">
          <a href="/baby_music/pc.png" class="shot-link shot-link--pc">
            <img :src="'/baby_music/pc.png'" alt="baby音乐桌面端" />
          </a>
          <p class="mock-label">Electron · Win / Mac / Linux</p>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  Feature 行                                                           -->
    <!-- ================================================================== -->
    <section class="feature-rows">
      <!-- 在线播放 -->
      <div class="feat-row">
        <div class="feat-text reveal">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
          </div>
          <h3>在线播放，海量曲库</h3>
          <p>千万曲库随心搜索与流式播放，支持多种音质选择。</p>
        </div>
        <div class="feat-visual reveal">
          <div class="visual-card vc-search">
            <div class="vc-icon-wrap">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div class="vc-wave-bars">
              <span v-for="i in 20" :key="i" class="vc-bar" :style="{ height: (20 + Math.random() * 60) + 'px', animationDelay: -(i * 0.12) + 's' }"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 歌词同步 -->
      <div class="feat-row feat-row--reverse">
        <div class="feat-visual reveal">
          <div class="visual-card vc-lyric">
            <div class="lyric-lines">
              <span v-for="i in 6" :key="i" class="lyric-line" :style="{ width: (50 + i * 8) + '%', opacity: i === 3 ? 1 : 0.3 }"></span>
            </div>
          </div>
        </div>
        <div class="feat-text reveal">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>
          </div>
          <h3>歌词同步，逐行精准</h3>
          <p>LRC 格式歌词逐行同步滚动，桌面端 + 移动端锁屏歌词，不错过每一句。</p>
        </div>
      </div>

      <!-- 离线下载 -->
      <div class="feat-row">
        <div class="feat-text reveal">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </div>
          <h3>离线下载，随时畅听</h3>
          <p>自动缓存已播歌曲，手动下载到本地，无网络也能畅听，自由不受限。</p>
        </div>
        <div class="feat-visual reveal">
          <div class="visual-card vc-download">
            <div class="dl-cards">
              <div v-for="i in 4" :key="i" class="dl-card" :style="{ animationDelay: -(i * 0.8) + 's' }">
                <span class="dl-card-icon"></span>
                <span class="dl-card-text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 自定义主题 -->
      <div class="feat-row feat-row--reverse">
        <div class="feat-visual reveal">
          <div class="visual-card vc-theme">
            <div class="theme-circles">
              <span v-for="c in themeColors" :key="c" class="theme-circle" :style="{ background: c }"></span>
            </div>
            <div class="theme-demo">
              <div class="theme-toggle"></div>
            </div>
          </div>
        </div>
        <div class="feat-text reveal">
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 010 20"/></svg>
          </div>
          <h3>自定义主题，随心所欲</h3>
          <p>深浅色模式、强调色、背景图、模糊度、透明度、字体 —— 一切都是你的风格。</p>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  特性 Grid                                                             -->
    <!-- ================================================================== -->
    <section class="grid-section">
      <div class="features-grid">
        <div v-for="(f, i) in features" :key="i" class="f-card reveal" :style="{ animationDelay: i * 0.06 + 's' }">
          <div class="f-card-icon" v-html="f.icon"></div>
          <h4>{{ f.title }}</h4>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  下载 Call-to-Action                                                    -->
    <!-- ================================================================== -->
    <section class="cta-section">
      <h2 class="reveal">现在就开始聆听<span class="dot">.</span></h2>
      <p class="reveal">选择你的平台，下载 baby音乐</p>
      <div class="reveal">
        <BabyMusicDownload />
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  Footer                                                                -->
    <!-- ================================================================== -->
    <footer class="bm-footer">
      <div class="footer-top">
        <span>Flutter 3.x · Dart</span>
        <span class="footer-dot"></span>
        <span>Electron 30 · Vue 3 · TypeScript</span>
      </div>
    </footer>

    <DownloadConfirm ref="dlConfirmRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import BabyMusicDownload from './BabyMusicDownload.vue'
import DownloadConfirm from './DownloadConfirm.vue'

const notes = ['♫', '♯', '♪', '♩']
const galleryRef = ref<HTMLElement | null>(null)
const dlConfirmRef = ref<InstanceType<typeof DownloadConfirm> | null>(null)

async function handleDownload(url: string) {
  const ok = await dlConfirmRef.value?.show()
  if (ok) {
    const a = document.createElement('a')
    a.href = url
    a.download = ''
    a.click()
  }
}

let lightbox: PhotoSwipeLightbox | null = null

function initLightbox() {
  if (!galleryRef.value) return
  lightbox?.destroy()
  lightbox = null

  const links = galleryRef.value.querySelectorAll<HTMLAnchorElement>('a')
  const preloads = Array.from(links).map((a) => {
    return new Promise<void>((resolve) => {
      const img = new Image()
      img.onload = () => {
        a.setAttribute('data-pswp-width', String(img.naturalWidth))
        a.setAttribute('data-pswp-height', String(img.naturalHeight))
        resolve()
      }
      img.onerror = () => resolve()
      img.src = a.href
    })
  })

  Promise.all(preloads).then(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.value!,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.85,
      padding: { top: 30, bottom: 30, left: 30, right: 30 }
    })
    lightbox.init()
  })
}

const themeColors = ['#ff6b35', '#f7931e', '#667eea', '#10b981', '#ef4444', '#ec4899', '#06b6d4']

const features = [
  {
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: '数据备份还原',
    desc: '歌单、收藏、配置加密导出为 .babydata，跨设备一键迁移'
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    title: '播放历史',
    desc: '完整记录播放历史，重启后恢复当前歌曲与播放进度'
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    title: '全局快捷键',
    desc: '桌面端专属，全局热键控制播放，不切屏高效操作'
  },
  {
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
    title: '每日推荐',
    desc: '每日精选歌单、热歌榜、新歌首发，发现更多好音乐'
  }
]

function noteStyle(n: number) {
  const seed = (n * 137.5 + 13.7) % 100
  return {
    left: seed.toFixed(1) + '%',
    animationDelay: -(n * 0.7) + 's',
    animationDuration: (8 + n % 4 * 3) + 's',
    fontSize: (14 + n % 3 * 8) + 'px',
    opacity: 0.03 + n % 3 * 0.03
  }
}

// ===== 滚动揭示动画 =====
const revealObserver = ref<IntersectionObserver | null>(null)

onMounted(() => {
  revealObserver.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.value!.observe(el))

  initLightbox()
})

onUnmounted(() => {
  revealObserver.value?.disconnect()
  lightbox?.destroy()
})
</script>

<style scoped lang="scss">
/* ================================================================
   CSS 变量
   ================================================================ */
.bm-landing {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'PingFang SC', 'Helvetica Neue', sans-serif;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  -webkit-font-smoothing: antialiased;
}

/* ===== 滚动揭示 ===== */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.dot { color: #ff6b35; }

/* ================================================================
   Hero
   ================================================================ */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  position: relative;
  overflow: hidden;

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,107,53,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 20% 80%, rgba(102,126,234,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(247,147,30,0.05) 0%, transparent 60%);
  }

  .hero-noise {
    position: absolute;
    inset: 0;
    opacity: 0.015;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    &--1 { width: 600px; height: 600px; background: rgba(255,107,53,0.08); top: -300px; right: -150px; animation: orbDrift 12s ease-in-out infinite; }
    &--2 { width: 400px; height: 400px; background: rgba(102,126,234,0.06); bottom: -150px; left: -100px; animation: orbDrift 14s ease-in-out infinite reverse; }
    &--3 { width: 300px; height: 300px; background: rgba(247,147,30,0.06); top: 50%; left: 50%; transform: translate(-50%, -50%); animation: orbPulse 6s ease-in-out infinite; }
  }

  .note-particle {
    position: absolute;
    top: -30px;
    color: var(--vp-c-text-3);
    opacity: 0.06;
    pointer-events: none;
    animation: particleDrop linear infinite;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }

  .hero-badge {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--vp-c-text-3);
    margin-bottom: 24px;
  }

  .hero-title {
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 16px;
    line-height: 1.1;

    @media (max-width: 768px) { font-size: 44px; }

    .gradient-text {
      background: linear-gradient(135deg, #ff6b35 0%, #f7931e 40%, #ffd166 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: textShimmer 5s ease infinite;
    }
  }

  .hero-sub {
    font-size: 21px;
    font-weight: 400;
    color: var(--vp-c-text-3);
    letter-spacing: 12px;
    margin: 0 0 32px;
    @media (max-width: 768px) { letter-spacing: 6px; font-size: 17px; }
  }

  .hero-desc {
    font-size: 17px;
    color: var(--vp-c-text-2);
    line-height: 1.7;
    max-width: 480px;
    margin: 0 0 40px;
    font-weight: 400;
  }

  .hero-cta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 40px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

    &--fill {
      background: linear-gradient(135deg, #ff6b35, #f7931e);
      color: #fff;
      box-shadow: 0 8px 28px rgba(255,107,53,0.35);
      &:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 36px rgba(255,107,53,0.5); color: #fff; }
    }

    &--outline {
      background: var(--vp-c-bg-soft);
      color: var(--vp-c-text-1);
      border: 1px solid var(--vp-c-divider);
      backdrop-filter: blur(10px);
      &:hover { background: var(--vp-c-bg-elv); transform: translateY(-3px); color: var(--vp-c-text-1); }
    }
  }

  .hero-ver {
    font-size: 13px;
    color: var(--vp-c-text-3);
    letter-spacing: 2px;
  }

  .hero-disclaimer {
    font-size: 11px;
    color: var(--vp-c-text-3);
    opacity: 0.4;
    margin: 12px 0 0;
    max-width: 480px;
    line-height: 1.5;
  }

  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: block;
      width: 24px; height: 40px;
      border: 2px solid var(--vp-c-divider);
      border-radius: 12px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 8px; left: 50%;
        transform: translateX(-50%);
        width: 3px; height: 8px;
        border-radius: 3px;
        background: var(--vp-c-text-3);
        animation: scrollHint 2s ease-in-out infinite;
      }
    }
  }
}

/* ================================================================
   两端 Mockup
   ================================================================ */
.dual-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 24px;
  background: var(--vp-c-bg);
  text-align: center;
  box-sizing: border-box;
}

.dual-header {
  margin-bottom: 72px;
  h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 12px;
    color: var(--vp-c-text-1);
  }
  p {
    font-size: 19px;
    color: var(--vp-c-text-2);
    margin: 0;
  }
}

.duo-mockups {
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.phone-mock {
  .shot-link {
    display: block;
    width: 300px;
    cursor: zoom-in;

    img {
      display: block;
      width: 100%;
      border-radius: 28px;
      box-shadow: 0 24px 64px rgba(0,0,0,0.15);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover img {
      transform: translateY(-12px) scale(1.02);
    }
  }
}

.desktop-mock {
  .shot-link {
    display: block;
    width: 720px;
    cursor: zoom-in;

    img {
      display: block;
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 24px 64px rgba(0,0,0,0.18);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover img {
      transform: translateY(-12px) scale(1.01);
    }
  }
}

.mock-label {
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

/* ================================================================
   Feature Rows (Alternating)
   ================================================================ */
.feature-rows {
  background: var(--vp-c-bg-soft);
}

.feat-row {
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 24px;
  @media (max-width: 860px) {
    flex-direction: column;
    gap: 40px;
    padding: 60px 24px;
  }

  &--reverse {
    @media (min-width: 861px) {
      .feat-text { order: 2; }
      .feat-visual { order: 1; }
    }
  }
}

.feat-text {
  flex: 1;
  min-width: 280px;

  .feat-icon {
    width: 56px; height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #ff6b35;
    background: rgba(255,107,53,0.08);
  }

  h3 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 12px;
    color: var(--vp-c-text-1);
  }

  p {
    font-size: 17px;
    color: var(--vp-c-text-2);
    line-height: 1.7;
    margin: 0;
    max-width: 400px;
  }
}

.feat-visual {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
}

.visual-card {
  width: 100%;
  max-width: 400px;
  height: 280px;
  border-radius: 24px;
  background: var(--vp-c-bg);
  box-shadow: 0 4px 32px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

/* 搜索可视化 - 频谱条 */
.vc-search {
  flex-direction: column;
  gap: 16px;
  .vc-icon-wrap { z-index: 1; }
  .vc-wave-bars {
    display: flex;
    align-items: center;
    gap: 3px;
    height: 80px;
    position: absolute;
    bottom: 40px;
  }
  .vc-bar {
    width: 4px;
    border-radius: 2px;
    background: linear-gradient(to top, #ff6b35, #f7931e);
    opacity: 0.5;
    animation: barBounce 0.8s ease-in-out infinite alternate;
  }
}

/* 歌词可视化 */
.vc-lyric {
  .lyric-lines {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
  }
  .lyric-line {
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #ff6b35, #f7931e);
    transition: all 0.4s;
  }
}

/* 下载可视化 */
.vc-download {
  .dl-cards {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
  }
  .dl-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: var(--vp-c-bg-soft);
    border-radius: 12px;
    animation: dlPulse 2s ease-in-out infinite;
    .dl-card-icon {
      width: 32px; height: 32px;
      border-radius: 8px;
      background: linear-gradient(135deg, #ff6b35, #f7931e);
      flex-shrink: 0;
    }
    .dl-card-text {
      flex: 1;
      height: 8px;
      border-radius: 4px;
      background: rgba(0,0,0,0.06);
    }
  }
}

/* 主题可视化 */
.vc-theme {
  flex-direction: column;
  gap: 24px;
  .theme-circles {
    display: flex;
    gap: 12px;
  }
  .theme-circle {
    width: 36px; height: 36px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    cursor: pointer;
    transition: transform 0.3s;
    &:hover { transform: scale(1.2); }
  }
  .theme-demo {
    width: 60%;
    height: 40px;
    border-radius: 20px;
    background: var(--vp-c-bg-soft);
    display: flex;
    align-items: center;
    padding: 0 4px;
    .theme-toggle {
      width: 32px; height: 32px;
      border-radius: 50%;
      background: #ff6b35;
      transition: margin-left 0.4s;
    }
  }
}

/* ================================================================
   Feature Grid
   ================================================================ */
.grid-section {
  background: var(--vp-c-bg);
  padding: 80px 24px 100px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px) { grid-template-columns: 1fr; }
}

.f-card {
  padding: 36px 24px;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover { transform: translateY(-8px); }

  .f-card-icon {
    width: 48px; height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    color: #ff6b35;
    background: rgba(255,107,53,0.08);
  }

  h4 {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 8px;
    color: var(--vp-c-text-1);
  }

  p {
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin: 0;
  }
}

/* ================================================================
   CTA Section
   ================================================================ */
.cta-section {
  text-align: center;
  padding: 100px 24px;
  background: var(--vp-c-bg-soft);

  h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 12px;
    color: var(--vp-c-text-1);
  }

  > p {
    font-size: 19px;
    color: var(--vp-c-text-2);
    margin: 0 0 56px;
  }
}

/* ================================================================
   Footer
   ================================================================ */
.bm-footer {
  text-align: center;
  padding: 48px 24px;
  background: var(--vp-c-bg);

  .footer-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    flex-wrap: wrap;
    font-size: 13px;
    color: var(--vp-c-text-2);
    margin-bottom: 20px;

    .footer-dot {
      width: 4px; height: 4px;
      border-radius: 50%;
      background: var(--vp-c-text-2);
      opacity: 0.3;
    }
  }

  > p {
    font-size: 12px;
    color: var(--vp-c-text-2);
    opacity: 0.5;
    margin: 0;
  }
}

/* ================================================================
   Animations
   ================================================================ */
@keyframes orbDrift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

@keyframes orbPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
}

@keyframes particleDrop {
  0% { transform: translateY(-30px) rotate(0deg); opacity: 0; }
  5% { opacity: 1; }
  90% { opacity: 0.8; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

@keyframes scrollHint {
  0%, 100% { transform: translate(-50%, 0); opacity: 1; }
  50% { transform: translate(-50%, 12px); opacity: 0.3; }
}

@keyframes textShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes barBounce {
  0% { transform: scaleY(0.3); }
  100% { transform: scaleY(1); }
}

@keyframes dlPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

</style>

