<script setup>
  import { Icon } from '@iconify/vue';
</script>
<template>
    <header>
      <nav class="bg-gray-800 text-white w-full h-16">
      <ul class="flex space-x-4 p-4 justify-evenly">
        <li class=""><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog/1">Blog 1</NuxtLink></li>
        
         <li>
  <div class="relative">
    <input
      type="text"
      placeholder="Search..."
      class="w-48 pl-3 pr-10 py-1
             border border-gray-300 rounded
             bg-gray-400 text-white
             focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Icon
      icon="icon-park-outline:search"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-black-400"
    />
  </div>
</li>

      </ul>
      </nav>
    </header>
</template>
<style lang="css" scoped>
  li:active{
color: red;
  }
</style>