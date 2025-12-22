<script setup>
    import { ref } from 'vue';
    const num=ref(0);
    // const goToBlog=()=>{
    //     if(num.value>0){
    //         const router=useRouter();
    //         router.push(`/blog/${num.value}` )
    //     }
    // }
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
            <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
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
    section div{
       
        
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
       
    }
    section{
        display: flex;
        padding: auto;
        margin: 19px 8px 8px 15px;
    }
    </style>