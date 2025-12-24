<script setup >
    
const {user,setUser}=useUser();
const router=useRouter();
const onSubmit=(e)=>{
    e.preventDefault();
    setUser(user.value.name,user.value.email,user.value.password);
    
    /* 
    note : this will not redirect to home page after login as this <NuxtLink> is only used for template. To redirect programmatically use useRouter() composable
    Example:
    const router=useRouter();
    router.push("/") to redirect to home page after login
    
    <NuxtLink to="/"></NuxtLink>; */
    /* Storing username in Local Storage */
   /* this doesn't work in nuxt4  nuxtStorage.localStorage.setData('userName',user.value.name) */
   if(user.value.name ==="" || user.value.email==="" || user.value.password==="" || user.value.password.length < 8){
alert("All fields are required and password must be greater than 8 characters")
// return;
router.push("/login")
   }
  else{
     localStorage.setItem('userName',user.value.name);
    console.log(`userName  data stored in localstorage key userName`);
    console.log("User logged in:",user.value.name);
      alert(`User ${user.value.name} logged successfully...`)
    router.push("/");
  }
}
</script>
<template>
<div class="flex justify-center items-center h-screen bg-gray-200">
    
    <!-- @submit="setUser" gives error so we define onSubmit and call the function on @submit event -->
    <form class="h-80 w-80 flex flex-col justify-center items-center bg-white rounded-lg" @submit="onSubmit">
        <h1>Login</h1> 
        <input type="text" name="username" id="username" placeholder="Username" class="border p-1.5 m-1" v-model="user.name"/>
        <input type="text" name="email" id="email" placeholder="Email" class="border p-1.5 m-1" v-model="user.email"/>
        <input type="password" name="password" id="password" placeholder="Password" class="border p-1.5 m-1" v-model="user.password"/>
        <button class="border p-1.5 m-1  text-white border-white rounded px-1 py-2 bg-amber-500 cursor-pointer">Login</button>
        <p>Already have an account ?
            <NuxtLink to="/register" class="text-blue-600 underline">Register</NuxtLink>
        </p>
    </form>
</div>
</template>