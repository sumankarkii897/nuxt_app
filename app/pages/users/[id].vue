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
    <div v-else>
      <h1>{{ user.name }}</h1>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>City: {{ user.address.city }}</p>
    </div>
  </main>
</template>
