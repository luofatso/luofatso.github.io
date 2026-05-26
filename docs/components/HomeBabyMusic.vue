<template>
  <section class="home-page home-baby-music" ref="sectionRef">
    <!-- 背景 -->
    <div class="bg-gradient"></div>
    <div class="orb orb--1"></div>
    <div class="orb orb--2"></div>
    <div class="orb orb--3"></div>

    <!-- 浮动音符 -->
    <span class="note note--1">&#9835;</span>
    <span class="note note--2">&#9839;</span>
    <span class="note note--3">&#9834;</span>
    <span class="note note--4">&#9833;</span>
    <span class="note note--5">&#9835;</span>
    <span class="note note--6">&#9834;</span>

    <!-- 主内容：左右两栏 -->
    <div class="content" :class="{ visible: inView }">
      <!-- 左：截图 -->
      <div class="visual" ref="galleryRef">
        <a href="/baby_music/app.jpg" class="shot shot--phone">
          <img :src="'/baby_music/app.jpg'" alt="baby音乐移动端" />
        </a>
        <a href="/baby_music/pc.png" class="shot shot--pc">
          <img :src="'/baby_music/pc.png'" alt="baby音乐桌面端" />
        </a>
      </div>

      <!-- 右：文案 -->
      <div class="text">
        <img src="/baby.png" alt="baby音乐" class="app-icon" />
        <h2 class="title">
          <span class="gradient-text">baby音乐</span>
        </h2>
        <p class="tagline">致不忘初心的你</p>
        <p class="desc">
          这不是儿歌，而是你面对世界那份最初的初心。<br/>
          移动端 + 桌面端，纯净统一的聆听体验。
        </p>

        <div class="actions">
          <a class="btn btn--primary"
            @click="handleDownload('/baby_music.apk')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            Android 下载
          </a>
          <a class="btn btn--secondary"
            @click="handleDownload('/baby_music_pc.exe')">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            桌面版 下载
          </a>
        </div>

        <p class="disclaimer">* 个人兴趣学习项目，下载使用自行承担风险，传播导致的任何法律风险概不负责</p>
        <a href="/baby-music" class="more-link">了解更多 &rarr;</a>
      </div>
    </div>

    <DownloadConfirm ref="dlConfirmRef" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import DownloadConfirm from './DownloadConfirm.vue'

const sectionRef = ref<HTMLElement | null>(null)
const galleryRef = ref<HTMLElement | null>(null)
const inView = ref(false)
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

let observer: IntersectionObserver | null = null
let lightbox: PhotoSwipeLightbox | null = null

function initLightbox() {
  if (!galleryRef.value) return
  // 防止 HMR 重复挂载
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

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { inView.value = true }, 200)
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.3 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)

  initLightbox()
})

onUnmounted(() => {
  observer?.disconnect()
  lightbox?.destroy()
})
</script>

<style scoped lang="scss">
.vp-doc p, .vp-doc h2 { margin: 0; border: none; }

.home-page {
  min-height: 100vh;
  padding: 32px 0;
  box-sizing: border-box;
}

.home-baby-music {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  position: relative;
  overflow: hidden;
  color: var(--vp-c-text-1);

  .bg-gradient {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 50% at 30% 50%, rgba(255,107,53,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 70% 30%, rgba(102,126,234,0.05) 0%, transparent 50%),
      radial-gradient(ellipse 60% 60% at 50% 80%, rgba(247,147,30,0.04) 0%, transparent 50%);
  }

  .orb {
    position: absolute; border-radius: 50%; filter: blur(90px);
    &--1 { width: 450px; height: 450px; background: rgba(255,107,53,0.07); top: -200px; left: -100px; animation: orbFloat 10s ease-in-out infinite; }
    &--2 { width: 350px; height: 350px; background: rgba(102,126,234,0.05); bottom: -120px; right: -80px; animation: orbFloat 12s ease-in-out infinite reverse; }
    &--3 { width: 250px; height: 250px; background: rgba(247,147,30,0.05); top: 40%; right: 30%; animation: orbPulse 5s ease-in-out infinite; }
  }

  .note {
    position: absolute; pointer-events: none;
    color: var(--vp-c-text-3);
    opacity: 0.06;
    animation: noteFloat 12s ease-in-out infinite;
    &--1 { top: 8%; left: 6%; font-size: 38px; animation-delay: 0s; }
    &--2 { top: 20%; right: 5%; font-size: 26px; animation-delay: -2s; }
    &--3 { bottom: 18%; left: 8%; font-size: 22px; animation-delay: -5s; }
    &--4 { bottom: 12%; right: 10%; font-size: 32px; animation-delay: -8s; }
    &--5 { top: 45%; left: 3%; font-size: 18px; animation-delay: -3s; }
    &--6 { bottom: 30%; right: 4%; font-size: 24px; animation-delay: -7s; }
  }

  .content {
    position: relative; z-index: 1;
    display: flex;
    align-items: center;
    gap: 80px;
    max-width: 1300px;
    width: 100%;
    padding: 0 40px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                transform 1s cubic-bezier(0.16, 1, 0.3, 1);

    &.visible { opacity: 1; transform: translateY(0); }
  }

  // ======== 左侧：截图 ========
  .visual {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    min-width: 680px;
    height: 520px;

    @media (max-width: 860px) {
      display: none;
    }
  }

  .shot {
    cursor: zoom-in;
    display: block;

    img {
      display: block;
      width: 100%;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover img {
      transform: scale(1.03);
    }

    &--phone {
      flex: 0 0 280px;
      margin-bottom: 20px;
    }

    &--pc {
      flex: 0 0 440px;
    }
  }

  // ======== 右侧：文案 ========
  .text {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 860px) {
      align-items: center;
      text-align: center;
    }
  }

  .app-icon {
    width: 56px; height: 56px;
    border-radius: 16px;
    margin-bottom: 16px;
    filter: drop-shadow(0 4px 16px rgba(255,107,53,0.3));
  }

  .title {
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 4px;
    margin: 0 0 8px;

    .gradient-text {
      background: linear-gradient(135deg, #ff6b35, #f7931e);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: textShimmer 5s ease infinite;
    }
  }

  .tagline {
    font-size: 15px;
    color: var(--vp-c-text-3);
    letter-spacing: 8px;
    margin: 0 0 16px;
  }

  .desc {
    font-size: 15px;
    color: var(--vp-c-text-2);
    line-height: 1.8;
    margin: 0 0 28px;
    max-width: 380px;
  }

  .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 26px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &--primary {
      background: linear-gradient(135deg, #ff6b35, #f7931e);
      color: #fff;
      box-shadow: 0 6px 20px rgba(255,107,53,0.3);
      &:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,107,53,0.45); color: #fff; }
    }

    &--secondary {
      background: var(--vp-c-bg-soft);
      color: var(--vp-c-text-1);
      border: 1px solid var(--vp-c-divider);
      &:hover { background: var(--vp-c-bg-elv); transform: translateY(-2px); color: var(--vp-c-text-1); }
    }
  }

  .disclaimer {
    font-size: 11px;
    color: var(--vp-c-text-3);
    opacity: 0.5;
    margin: 0 0 8px;
    line-height: 1.5;
    max-width: 380px;
  }

  .more-link {
    font-size: 13px;
    color: var(--vp-c-brand-1);
    opacity: 0.8;
    text-decoration: none;
    letter-spacing: 1px;
    transition: color 0.3s;
    &:hover { color: var(--vp-c-brand-1); opacity: 1; }
  }
}

// ======== 动画 ========
@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -20px); }
  66% { transform: translate(-20px, 15px); }
}

@keyframes orbPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes noteFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.04; }
  25% { transform: translateY(-25px) rotate(8deg); opacity: 0.12; }
  50% { transform: translateY(-10px) rotate(-4deg); opacity: 0.06; }
  75% { transform: translateY(-35px) rotate(4deg); opacity: 0.1; }
}

@keyframes textShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
