<template>
  <div class="baby-music-download">
    <div class="platforms">
      <div class="platform-card">
        <div class="platform-icon">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18" />
          </svg>
        </div>
        <h3>移动端</h3>
        <p class="platform-desc">Flutter 构建 · Android</p>
        <ul>
          <li>在线搜索与播放</li>
          <li>歌词同步显示</li>
          <li>离线缓存与下载</li>
          <li>自定义主题皮肤</li>
          <li>后台与锁屏控制</li>
        </ul>
        <a class="download-btn" @click="handleDownload('/baby_music.apk')">
          下载 APK
        </a>
      </div>

      <div class="platform-card">
        <div class="platform-icon">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>
        <h3>桌面端</h3>
        <p class="platform-desc">Electron 构建 · Windows / Mac / Linux</p>
        <ul>
          <li>全功能音乐播放</li>
          <li>歌词同步显示</li>
          <li>全局快捷键控制</li>
          <li>迷你播放器模式</li>
          <li>导入本地音频文件</li>
        </ul>
        <a class="download-btn" @click="handleDownload('/baby_music_pc.exe')">
          下载桌面版
        </a>
      </div>
    </div>
    <p class="download-disclaimer">* 个人兴趣学习项目，下载使用自行承担风险，传播导致的任何法律风险概不负责</p>

    <DownloadConfirm ref="dlConfirmRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DownloadConfirm from './DownloadConfirm.vue'

const dlConfirmRef = ref(null)

async function handleDownload(url) {
  const ok = await dlConfirmRef.value?.show()
  if (ok) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop() || 'download'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
</script>

<style scoped lang="scss">
.platforms {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.platform-card {
  width: 280px;
  padding: 36px 28px 32px;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .platform-icon {
    color: #e8734a;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 4px;
    border: none;
    padding: 0;
    color: var(--vp-c-text-1);
  }

  .platform-desc {
    font-size: 13px;
    color: var(--vp-c-text-2);
    margin: 0 0 20px;
    line-height: normal;
  }

  ul {
    text-align: left;
    list-style: none;
    padding: 0;
    margin: 0 0 28px;

    li {
      padding: 5px 0;
      color: var(--vp-c-text-2);
      font-size: 14px;
      line-height: 1.6;

      &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #e8734a;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
  }

  .download-btn {
    display: inline-block;
    padding: 10px 36px;
    background: linear-gradient(135deg, #e8734a, #d4603a);
    color: #fff;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.3s, transform 0.2s;

    &:hover {
      opacity: 0.9;
      transform: scale(1.03);
      color: #fff;
    }
  }
}

.download-disclaimer {
  margin-top: 24px;
  font-size: 11px;
  color: var(--vp-c-text-3);
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
}
</style>
