<script setup lang="js">
    const { greeting } = useUtils();
    definePageMeta({
        layout: 'custom'
    });
    greeting();
</script>
<template>
    <main class="p-2">
        
<section>
    <div class="">
        <h1>Welcome to the Contact Page</h1>
    </div>
</section>
    </main>
</template>