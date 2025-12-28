<script setup >
    
const {user,setUser}=useUser();
const router=useRouter();
const errors=reactive({
  name:"",
  email:"",
  password:""
})
const validate=()=>{
/* clearing error */
errors.name=""
errors.email=""
errors.password=""
let isValid=true
if(!user.value.name){
  errors.name="Username is required"
  isValid=false
}
if(!user.value.email){
  errors.email="Email is required"
  isValid=false
}
if(!user.value.password){
  errors.password="Password is required"
  isValid=false
}
if(user.value.password.length < 8){
  errors.password="Password must be at least 8 characters"
  isValid=false
}
return isValid
}
const onSubmit=(e)=>{
    e.preventDefault();
    
    
    /* 
    note : this will not redirect to home page after login as this <NuxtLink> is only used for template. To redirect programmatically use useRouter() composable
    Example:
    const router=useRouter();
    router.push("/") to redirect to home page after login
    
    <NuxtLink to="/"></NuxtLink>; */
    /* Storing username in Local Storage */
   /* this doesn't work in nuxt4  nuxtStorage.localStorage.setData('userName',user.value.name) */
   /* if(user.value.name ==="" || user.value.email==="" || user.value.password==="" || user.value.password.length < 8){
alert("All fields are required and password must be greater than 8 characters")
// return;
router.push("/login")
   } */
  /* else{
     localStorage.setItem('userName',user.value.name);
    console.log(`userName  data stored in localstorage key userName`);
    console.log("User logged in:",user.value.name);
      alert(`User ${user.value.name} logged successfully...`)
    router.push("/");
  } */
 if(!validate()){
  return;
 }
setUser(user.value.name,user.value.email,user.value.password);
  localStorage.setItem('userName',user.value.name);
  router.push("/")
}
useHead({
  title:"Login",
  meta:[{
    name:"description",content:"Login to your account"
  }]
})
</script>
<template>
<div class="flex justify-center items-center h-screen bg-gray-200">
      <form class="h-auto w-80 flex flex-col justify-center items-center bg-white rounded-lg p-4" @submit="onSubmit">
        <h1 class="text-xl font-bold mb-4">Login User</h1>
    <!-- @submit="setUser" gives error so we define onSubmit and call the function on @submit event -->
    <div class="w-full mb-2">
      <input
        type="text"
        placeholder="Username"
        v-model="user.name"
        :class="['border p-2 rounded w-full', errors.name ? 'border-red-500' : 'border-gray-300']"
      />
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
    </div>
    <div class="w-full mb-2">
      <input type="email" placeholder="Email" v-model="user.email" :class="['border p-2 rounded w-full',errors.name?'border-red-500':'border-gray-300']">
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{errors.email
       }}</p>
    </div>
    <div class="w-full mb-2">
      <input type="password" placeholder="Password" v-model="user.password" :class="['border p-2 rounded w-full',errors.password?'border-red-500':'border-gray-300']">
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
    </div>
        <button type="submit" class="bg-amber-500 text-white rounded px-4 py-2 mt-2 w-full hover:bg-amber-600 cursor-pointer">Login</button>
        <p>Don't have an account ?
            <NuxtLink to="/register" class="text-blue-600 underline">Register</NuxtLink>
        </p>
    </form>
</div>
</template>