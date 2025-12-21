<template>
    <main>
        <h1>Form Component</h1>
        <form id="myForm" method="post" @submit="handleSubmit">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="name" />
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email" />
            <br />
            <button type="submit">Submit</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('');
const email = ref('');
const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Name: ${name.value}\nEmail: ${email.value}`);
    console.log(name);
    console.log(email);
    name.value = '';
    email.value = '';

    
}
</script>
