<template>
  <div class="nav">
    <template v-for="it in NAV_DATA">
      <h2 v-if="it.title" :id="formatTitle(it.title)">
        {{ it.title }}
        <a class="header-anchor" :href="`#${formatTitle(it.title)}`" aria-hidden="true"></a>
      </h2>
      <div class="nav-item">
        <template v-for="item in it.items">
          <a v-if="item.link" class="nav-link" :href="item.link" target="_blank" rel="noreferrer">
            <article class="box">
              <div class="box-header">
                <div v-if="typeof item.icon === 'object'" class="icon" v-html="item.icon.svg"></div>
                <div v-else-if="item.icon && typeof item.icon === 'string'" class="icon">
                  <img :src="withBase(item.icon)" :alt="item.title" onerror="this.parentElement.style.display='none'" />
                </div>
                <h5 v-if="item.title" :id="formatTitle(item.title)" class="title">{{ item.title }}</h5>
              </div>
              <p v-if="item.desc" class="desc">{{ item.desc }}</p>
            </article>
          </a>
        </template>

      </div>
    </template>
  </div>
</template>
<script setup lang='ts'>
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'
import { NAV_DATA } from './data'

const formatTitle = (title: string) => {
  if (!title) {
    return ''
  }
  return slugify(title)
}
</script>
<style lang='scss' scoped>
.nav-item {
  --nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--nav-gap);
  grid-column-gap: var(--nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--nav-gap);
}

@each $media,
$size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .nav-item {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

.nav-link {
  --nav-icon-box-size: 40px;
  --nav-icon-size: 24px;
  --nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s;

  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg-soft-up);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);

    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--nav-icon-box-size);
    height: var(--nav-icon-box-size);
    font-size: var(--nav-icon-size);
    background-color: var(--vp-c-bg-soft-down);
    transition: background-color 0.25s;

    :deep(svg) {
      width: var(--nav-icon-size);
      fill: currentColor;
    }

    :deep(img) {
      border-radius: 4px;
      width: var(--nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--nav-icon-box-size);
    font-size: 16px;
    font-weight: 600;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (min-width: 960px) {
  .nav-item {
    --nav-gap: 20px;
  }
}

@media (max-width: 960px) {
  .nav-link {
    --nav-icon-box-size: 36px;
    --nav-icon-size: 20px;
    --nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}</style>
