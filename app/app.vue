<script setup lang="ts">
import AppAlert from './components/AppAlert.vue';

</script>

<template>
  <!-- <div>
  
    <FormComponent />
  </div> -->
  <NuxtLayout>
    <header>
      <nav class="bg-gray-800 text-white">
      <ul class="flex space-x-4 p-4 justify-evenly">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/blog/1">Blog 1</NuxtLink></li>
        <li><NuxtLink to="/blog/2">Blog 2</NuxtLink></li>
      </ul>
      </nav>
    </header>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
