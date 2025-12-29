<script setup>
  import { useLocalStorage } from '@vueuse/core'
import { useUserStore } from '~~/stores/user';
  const userData = useLocalStorage('user', '')
  
  const userStore=useUserStore();
  // const {user}=useUser();
  // const userName=localStorage.getItem("userName")
  // const userData=JSON.parse(localStorage.getItem("user"))
  useHead(
   { title:"profile",
meta:[{
 property:"og-title" , content:`profile`
}]
   }
  )

</script>
<template>
    <div class="mt-4 p-2">
        <h1 class="text-xl text-center">Welcome, {{ userStore.user?.name }}</h1>
        <p>{{userData}}</p>
        <p>Name : {{ userData.name }}</p>
        <p> Email : {{ userData.email }}</p>
       
    </div>
    <div>
      
    </div>
</template>