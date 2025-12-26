<script setup>
const route=useRoute();
/* fetch api for single user with id from route.params.id */
const id=route.params.id;
const {data:user,pending,error}=await useFetch(`/api/users/${id}`);
/* useFetch return ref object so user in not an object it is an object */
console.log(user.value);

</script>
<template>
  <main>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading user</div>
    <div v-else class="flex justify-center items-center h-84">
      <div class="bg-white w-6/12 h-64 flex flex-col justify-start items-start p-4 shadow-lg rounded-lg">
        <h1 class="font-bold text-2xl ">{{ user.name }}</h1>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>City: {{ user.address.city }}</p>
      <p>Street : {{ user.address.street }}</p>
      <p>Phone : {{ user.phone }}</p>
      <p> Company : {{ user.company.name }}</p>
      </div>
    </div>
  </main>
</template>
