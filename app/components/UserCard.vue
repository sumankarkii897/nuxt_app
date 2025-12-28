<script setup lang="ts">



const props=defineProps<{name:string,address:string,
  email:string,
  phone:string,
  id:number
}>();
const viewUserProfile=(id:number)=>{
 /*  alert(`Hello ${id}`) */
  navigateTo(`users/${id}`)
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md  transition-shadow duration-300 p-5 max-w-sm mx-auto w-xl h-54">
    <p class="text-lg font-semibold text-gray-800 mb-2">Name: {{ props.name }}</p>
    <p class="text-gray-600">Address: {{ props.address }}</p>
    <p>Email : {{ props.email }}</p>
    <p>Phone No :{{ props.phone }}</p>
    <div class="flex justify-center">
      <button @click='viewUserProfile(props.id)'
      class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded bottom-0 "
    >
      View Profile
    </button>
    </div>
  </div>
</template>

<style scoped>

</style>
