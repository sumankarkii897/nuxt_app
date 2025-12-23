<script setup lang="ts">


const props = defineProps<{ user: { name: string; address: string } }>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 max-w-sm mx-auto">
    <p class="text-lg font-semibold text-gray-800 mb-2">Name: {{ props.user.name }}</p>
    <p class="text-gray-600">Address: {{ props.user.address }}</p>
    <button 
      class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded bottom-0"
    >
      View Profile
    </button>
  </div>
</template>

<style scoped>

</style>
