<script setup lang="js">
const { count } = useCounter();

    // const { greeting } = useUtils();
    /* definePageMeta({
    // greeting();
    // const user=[{
    //     name:"Ram",
    //     address:"Kathmandu"
    // },
    // {
    //     name:"Hari",
    //     address:"Lalitpur"
    // },
    // {
    //     name:"Shyam",
    //     address:"Bhaktapur"
    // }]
    /* calling API using useFetchi in contact page */
    const {data:users,pending,error}=await useFetch("/api/users")
    /* useFetch return ref object so users in not an array it is an object */
    console.log(users.value);
    // users=users.value.data;
    console.log(users.value.data);


    useHead({
        title:"Contact",
        meta:[{
            name:"description",content:"Get in touch with us"
        }]
    })
</script>
<template>
    <main class="p-2">
        
<section>
    <div class="text-2xl font-bold mb-4 text-center">
        <h1>Welcome to the Contact Page</h1>
    </div>
</section>
<div class="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- <UserCard v-for="u in user" :key="u.name" :name="u.name" :address="u.address" /> -->
     <!-- <ul> -->
        <!-- <li>User List</li> -->
        <!-- automatically unwraps ref in template so it works -->
         <!-- : -> v-bind for dynamic routing if not : then /users/1 -->
        <!-- <li v-for="user in users" :key="user.id"><NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink></li> -->
    <!--  </ul> -->
      <UserCard v-for="user in users" :key="user.id" :name="user.name" :address="user.address.city" :email="user.email" :phone="user.phone" :id="user.id" />
</div>

    </main>
</template>