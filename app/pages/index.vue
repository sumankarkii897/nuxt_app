<script setup>
    import { ref } from 'vue';
    const num=ref(0);
    const goToBlog=()=>{
        if(num.value>0){
            const router=useRouter();
            router.push(`/blog/${num.value}` )
        }
    }
</script>
<!-- <NuxtLink to="/blog/1"></NuxtLink> only used in the template inside script use useRouter and router.push(`/blog/${num.value}`  ) -->
<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <div class="flex space-x-4 flex-col items-start">
            <input type="number" v-model="num" name="" id="" class="border p-1" >
<button v-if="num>0" @click="goToBlog" class="border p-1.5 m-1">Go to Blog {{ num }}</button>
        </div>
    </div>
</template>