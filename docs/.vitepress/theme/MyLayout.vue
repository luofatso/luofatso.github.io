<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import ValineComment from './ValineComment.vue'
import { watch } from "vue"
import { useRoute } from "vitepress"

const { Layout } = DefaultTheme
const route = useRoute();

watch(
  () => route.path,
  () => {
    if(route.path === '/blog/nav'){
      document.querySelector('.Layout')?.classList.add('nav-layout')
    } else {
      document.querySelector('.Layout')?.classList.remove('nav-layout')
    }
  }
);

</script>

<template>
  <Layout>
    <template #doc-after>
      <ValineComment />
    </template>
  </Layout>
</template>
