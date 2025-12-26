<script setup>
  import { useLocalStorage } from '@vueuse/core'
  const userName = useLocalStorage('userName', '')
</script>
<template>
    <div class="mt-4">
        <h1 class="text-xl text-center">Welcome, {{ userName }}</h1>
    </div>
    <div>
      
    </div>
</template>