<script setup >
const {user,setUser}=useUser();
const name=ref("");
</script>
<template>
    <div>
        <h2>User Information</h2>
        <p>Name: {{ user }}</p>
        <input type="text" name="" id="" v-model="name" placeholder="Enter User Name" class="border "/>
        <button @click="setUser(name)" class="border p-1.5 m-1  text-white">Set User</button>
    </div>
    </template>
