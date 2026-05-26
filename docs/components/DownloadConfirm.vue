<template>
  <Teleport to="body">
    <div v-if="visible" class="dl-confirm-overlay" @click.self="cancel">
      <div class="dl-confirm-box">
        <h3>下载确认</h3>
        <div class="dl-confirm-body">
          <p>本项目为<strong>个人兴趣学习项目</strong>，仅供学习交流使用。</p>
          <p>下载使用请自行承担风险，<strong>如有传播导致的任何法律风险，开发者概不负责</strong>。</p>
        </div>
        <div class="dl-confirm-actions">
          <button class="dl-btn dl-btn--cancel" @click="cancel">取消</button>
          <button class="dl-btn dl-btn--confirm" @click="confirm">同意并下载</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
let resolvePromise: ((value: boolean) => void) | null = null

function show(): Promise<boolean> {
  visible.value = true
  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

function confirm() {
  visible.value = false
  resolvePromise?.(true)
}

function cancel() {
  visible.value = false
  resolvePromise?.(false)
}

defineExpose({ show })
</script>

<style scoped>
.dl-confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: dlFadeIn 0.2s ease;
}

.dl-confirm-box {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.dl-confirm-box h3 {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.dl-confirm-body {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin-bottom: 24px;
}

.dl-confirm-body strong {
  color: var(--vp-c-text-1);
}

.dl-confirm-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.dl-btn {
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.dl-btn:hover {
  opacity: 0.85;
}

.dl-btn--cancel {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.dl-btn--confirm {
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: #fff;
}

@keyframes dlFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
