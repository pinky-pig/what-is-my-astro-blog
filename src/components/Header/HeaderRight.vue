<script setup lang="ts">
import { SITE } from '../../config';
import HeaderLink from './HeaderLink.vue';
</script>

<template>
  <div class="flex-1 text-right md:-mr-1 mr-1 flex flex-row justify-end items-center">
    
    <HeaderLink :href="`https://twitter.com/${SITE.twitterId}`" target="_blank">
      <p class="md:inline-block hidden">Project</p>
    </HeaderLink>
    <HeaderLink class="md:inline-block hidden" :href="`https://github.com/${SITE.githubId}`" target="_blank">
      <p class="md:inline-block hidden">GitHub</p>
    </HeaderLink>

    <HeaderLink :href='SITE.blogPage' target="_blank">
      Blog
    </HeaderLink>
    <HeaderLink href="/rss.xml" target="_blank" class="lg:inline-block hidden">More</HeaderLink>
  </div>
</template>

<style scoped>
</style>
