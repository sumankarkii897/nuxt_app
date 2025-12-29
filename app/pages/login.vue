<script setup>
  import {useUserStore} from '~~/stores/user'
const userStore=useUserStore();
// const { user, setUser } = useUser();
// const router = useRouter();
const errors = reactive({
  name: "",
  email: "",
  password: ""
})
const formData=reactive({
  name:"",
  email:"",
  password:""
})
const validate = () => {
  /* clearing error */
  errors.name = ""
  errors.email = ""
  errors.password = ""
  let isValid = true
  if (!formData.name) {
    errors.name = "Username is required"
    isValid = false
  }
  // if (!formData.name) {
  //   errors.name = "Username is required"
  //   isValid = false
  // }
  if (!formData.email) {
    errors.email = "Email is required"
    isValid = false
  }
  if (!formData.password) {
    errors.password = "Password is required"
    isValid = false
  }
  if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters"
    isValid = false
  }
  return isValid
}
const onSubmit = (e) => {
  e.preventDefault();


  /* 
  note : this will not redirect to home page after login as this <NuxtLink> is only used for template. To redirect programmatically use useRouter() composable
  Example:
  const router=useRouter();
  router.push("/") to redirect to home page after login
  
  <NuxtLink to="/"></NuxtLink>; */
  /* Storing username in Local Storage */
  /* this doesn't work in nuxt4  nuxtStorage.localStorage.setData('userName',formData.name) */
  /* if(formData.name ==="" || formData.email==="" || formData.password==="" || formData.password.length < 8){
alert("All fields are required and password must be greater than 8 characters")
// return;
router.push("/login")
  } */
  /* else{
     localStorage.setItem('userName',formData.name);
    console.log(`userName  data stored in localstorage key userName`);
    console.log("User logged in:",formData.name);
      alert(`User ${formData.name} logged successfully...`)
    router.push("/");
  } */
  if (!validate()) {
    return;
  }
  // setUser(formData.name, formData.email, formData.password);

  // router.push("/")
  userStore.login(formData.name,formData.email,formData.password)
}
useHead({
  title: "Login",
  meta: [{
    name: "description", content: "Login to your account"
  },
{
  property:'og:title',content:'Login'
},
{
  property:'og:description',content:"Login to your account"
},
{
  name:'keywords', content:"login,user account,sign in , authentication"
}

]
})
</script>
<template>
  <div class="flex justify-center items-center h-screen bg-gray-200">
    <form class="h-auto w-80 flex flex-col justify-center items-center bg-white rounded-lg p-4" @submit="onSubmit">
      <h1 class="text-xl font-bold mb-4">Login User</h1>
      <!-- @submit="setUser" gives error so we define onSubmit and call the function on @submit event -->
      <div class="w-full mb-2 flex">
      
        <input type="text" placeholder="Username" 
        id="Username"
        v-model="formData.name"
          :class="['border p-2 rounded w-full', errors.name ? 'border-red-500' : 'border-gray-300']" />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
      </div>
      <div class="w-full mb-2">
        <input type="email" placeholder="Email" v-model="formData.email"
          :class="['border p-2 rounded w-full', errors.name ? 'border-red-500' : 'border-gray-300']">
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email
          }}</p>
      </div>
      <div class="w-full mb-2">
        <input type="password" placeholder="Password" v-model="formData.password"
          :class="['border p-2 rounded w-full', errors.password ? 'border-red-500' : 'border-gray-300']">
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
      </div>
      <button type="submit"
        class="bg-amber-500 text-white rounded px-4 py-2 mt-2 w-24 hover:bg-amber-600 cursor-pointer">Login</button>
      <p class="mt-2">Don't have an account ?
        <NuxtLink to="/register" class="text-blue-600 underline">Register</NuxtLink>
      </p>
    </form>
  </div>
</template>