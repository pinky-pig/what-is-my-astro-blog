<script setup lang="ts">
import { SITE } from '../../config'
import HeaderLink from './HeaderLink.vue'
</script>

<template>
  <div class="flex-1 text-right md:-mr-1 mr-1 flex flex-row justify-end items-center font-extrabold">
    <HeaderLink :href="SITE.profilePage">
      <p class="md:inline-block hidden">
        Profile
      </p>
    </HeaderLink>

    <HeaderLink :href="SITE.blogPage">
      <p class="md:inline-block hidden">
        Weekly
      </p>
    </HeaderLink>

    <HeaderLink :href="SITE.tipsPage">
      Tips
    </HeaderLink>

    <HeaderLink :href="`https://github.com/${SITE.githubId}`" target="_blank">
      <p class="md:inline-block hidden">
        GitHub
      </p>
    </HeaderLink>

    <HeaderLink href="/rss.xml" target="_blank" class="lg:inline-block hidden">
      More
    </HeaderLink>
  </div>
</template>

<style scoped>
</style>
