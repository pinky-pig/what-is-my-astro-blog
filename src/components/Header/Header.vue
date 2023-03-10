<script setup lang="ts">
import AstroLogo from './AstroLogo.vue';
import { SITE } from '../../config'
import HeaderRight from './HeaderRight.vue';

</script>

<template>
  <header>
    <nav 
     class="flex flex-row text-32px py-6 px-5 "
     >
      <div class="flex place-items-center gap-1 text-[2rem] w-200px flex-shrink-0 flex-grow-0">
        <a href="/" class="flex place-items-center" >
          <AstroLogo :size='40' />
        </a>
        <a href="/">
          <p class="text-gray-800 font-bold">{{ SITE.title }}</p>
        </a>
      </div>

      <HeaderRight />
    </nav>
  </header>
</template>

<style >
.header-container {
  backdrop-filter: saturate(50%) blur(8px);
  -webkit-backdrop-filter: saturate(50%) blur(8px);
}

</style>
