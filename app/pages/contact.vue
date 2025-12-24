<script setup lang="js">
const { count } = useCounter();

    // const { greeting } = useUtils();
    definePageMeta({
        layout: 'custom'
    });
    // greeting();
    const user=[{
        name:"Ram",
        address:"Kathmandu"
    },
    {
        name:"Hari",
        address:"Lalitpur"
    },
    {
        name:"Shyam",
        address:"Bhaktapur"
    }]
</script>
<template>
    <main class="p-2">
        
<section>
    <div class="text-2xl font-bold mb-4 text-center">
        <h1>Welcome to the Contact Page</h1>
    </div>
</section>
<div class="mt-2.5 display:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <UserCard v-for="u in user" :key="u.name" :name="u.name" :address="u.address" />
</div>

    </main>
</template>