<script setup>
    import { ref } from 'vue';
    const num=ref(0);
    // const goToBlog=()=>{
    //     if(num.value>0){
    //         const router=useRouter();
    //         router.push(`/blog/${num.value}` )
    //     }
    // }
    const users=[{
        name:"Ram",address:"Kathmandu"
    },
    {
        name:"Shyam",address:"Lalitpur"
    },
    {
        name:"Hari",address:"Bhaktapur"
    }]
</script>
<!-- <NuxtLink to="/blog/1"></NuxtLink> only used in the template inside script use useRouter and router.push(`/blog/${num.value}`  ) -->
<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <!-- <div class="flex space-x-4 flex-col items-start">
            <input type="number" v-model="num" name="" id="" class="border p-1" >
<button v-if="num>0" @click="goToBlog" class="border p-1.5 m-1 bg-gray-400 text-white">Go to Blog {{ num }}</button>
        </div> -->
        <section>
            <UserCard v-for="user in users" :key="user.name" :user="user" />
        </section>
    </div>
</template>
<style scoped>
    div h1{
        text-align: center;
        margin-top: 20px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.5rem;
        font-weight: bold;
        
        
        
    }
    /* section div{
       
        
        height: 350px;
        width: 650px;
        border: 1px solid black;
        border-radius: 20px;
        padding: 10px;
        overflow: auto;
        margin-right: 10px;
        background-color: white;
        font-family: cursive;
        font-size: 1rem;
       
    } */
    section{
        display: flex;
        padding: auto;
        margin: 19px 8px 8px 15px;
    }
    </style>