<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import ValineComment from './ValineComment.vue'
import { watch, onMounted, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

watch(
  () => route.path,
  () => {
    if (route.path === '/nav') {
      document.querySelector('.Layout')?.classList.add('nav-layout')
    } else {
      document.querySelector('.Layout')?.classList.remove('nav-layout')
    }
  }
)

const { isDark } = useData()

function updateElementTheme(isDark: boolean) {
  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.removeAttribute('data-theme')
    }
  }
}

onMounted(() => {
  updateElementTheme(isDark.value)
})

watch(isDark, (newVal) => {
  nextTick(() => {
    updateElementTheme(newVal)
  })
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <ValineComment />
    </template>
  </Layout>
</template>
