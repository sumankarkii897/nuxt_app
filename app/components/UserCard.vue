<script setup lang="ts">



const props=defineProps<{name:string,address:string}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:bg-green-400 transition-shadow duration-300 p-5 max-w-sm mx-auto m-2 ">
    <p class="text-lg font-semibold text-gray-800 mb-2">Name: {{ props.name }}</p>
    <p class="text-gray-600">Address: {{ props.address }}</p>
    <button 
      class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded bottom-0"
    >
      View Profile
    </button>
  </div>
</template>

<style scoped>

</style>
