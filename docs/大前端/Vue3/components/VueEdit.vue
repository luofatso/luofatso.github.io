<template>
  <div class="in-center">
    <el-input
      ref="inputRef"
      v-model="textarea"
      style="width: 100%; white-space: pre-wrap"
      :autosize="{ minRows: 12, maxRows: 20 }"
      type="textarea"
      class="in-center-textarea"
      :class="{ 'is-error': isError, dark: isDark }"
      :input-style="{ lineHeight: '1.5', whiteSpace: 'pre-wrap' }"
      :placeholder="placeholder"
      @blur="checkInput"
      @scroll="syncScroll"
      resize="none"
    />
    <div
      ref="editDivRef"
      class="in-center-edit"
      @input="handleInput"
      v-html="formattedText"
    ></div>
    <p class="in-center-tip">用户名只能包含字母、数字、下划线和句点，长度 2 到 24</p>
  </div>
</template>
<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const placeholder = ref(`请输入用户名字\u000Ataylor123\u000Acakoyane`)
const textarea = ref('')
const formattedText = ref('')
const editDivRef = ref(null)
const inputRef = ref(null)
const isError = ref(false)

// 只能包含字母、数字、下划线和句点，长度 2 到 24
// const isValidId = (id) => /^[a-zA-Z0-9._]{2,24}$/.test(id);
const isValidId = (id) => /^[a-zA-Z0-9._]{2,24}$/.test(id) && !id.includes('%')

const checkInput = () => {
  const lines = textarea.value.split('\n')
  let firstErrorIndex = -1
  formattedText.value = lines
    .map((line, index) => {
      if (line.trim().length && !isValidId(line.trim())) {
        if (firstErrorIndex === -1) firstErrorIndex = index // 记录第一个错误的位置
        return `<span style="color: red">${line || '<p><br></p>'}</span>` // 标红
      }
      return line || '<p><br></p>'
    })
    .join('\n')
  // console.log(firstErrorIndex);
  isError.value = firstErrorIndex >= 0 ? true : false
  // 滚动到第一个错误
  nextTick(() => scrollToError(firstErrorIndex))
}

// 滚动到第一个错误行
const scrollToError = (errorIndex) => {
  if (errorIndex === -1 || !editDivRef.value || !inputRef.value?.$el) return

  const textareaEl = inputRef.value.$el.querySelector('.el-textarea__inner')
  if (textareaEl) {
    const lineHeight = 18 // 假设每行高度 24px
    const scrollPosition = errorIndex * lineHeight
    textareaEl.scrollTop = scrollPosition
    // styledDiv.value.scrollTop = scrollPosition;
  }
}

// 监听 textarea 的变化，更新 formattedText
watch(textarea, (newVal) => {
  const lines = newVal.split('\n').join('\n')
  formattedText.value = lines + '<br>'
})

// 处理输入事件
const handleInput = (event) => {
  textarea.value = event.target.innerText
  nextTick(() => {
    syncScroll()
  })
}

// 监听滚动事件
const syncScroll = () => {
  if (editDivRef.value && inputRef.value) {
    const textareaEl = inputRef.value.$el.querySelector('.el-textarea__inner')
    // console.log(textareaEl.scrollHeight, editDivRef.value.scrollHeight);
    if (textareaEl) {
      editDivRef.value.scrollTop = textareaEl.scrollTop
    }
  }
}
</script>
<style lang="scss" scoped>
.in-center {
  position: relative;
  width: 100%;
  z-index: 9999;
  overflow: hidden;
  &-tip {
    font-size: 12px;
    color: #435267;
  }
  &-err {
    font-size: 12px;
    color: #d13b3b;
    padding-bottom: 6px;
  }
  img {
    width: 100%;
  }
  &-textarea textarea::placeholder {
    white-space: pre-wrap; /* 保留换行符 */
    color: #999; /* 可选：调整 placeholder 颜色 */
    position: relative;
    z-index: 9999;
  }
  &-textarea.is-error {
    :deep(.el-textarea__inner) {
      border: red solid 1px !important;
    }
  }
  :deep(.el-textarea__inner) {
    // width: 200px !important;
    position: relative;
    z-index: 9999;
    height: 280px !important;
    font-size: 13px;
    padding: 5px 11px 20px 11px !important;
    caret-color: #000000;
    color: var(--el-input-text-color, var(--el-text-color-regular));
    color: transparent;
    background-color: transparent;
    line-height: 18px !important;
    outline: none;
    font-family: inherit !important;
  }

  &-edit {
    font-family: inherit !important;
    // border: 1px solid transparent;
    outline: none;
    font-size: 13px;
    color: var(--el-input-text-color, var(--el-text-color-regular));
    height: 280px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    // left: 205px;
    left: 0;
    z-index: 9990;
    overflow-y: auto;
    width: 101%;
    padding: 5px 11px 20px 11px !important;
    line-height: 18px;
    white-space: pre-wrap;
  }
}

/* 深色主题 */
.dark {
  caret-color: white !important; /* 白色光标 */
  :deep(.el-textarea__inner) {
    caret-color: white !important; /* 白色光标 */
  }
}
</style>
