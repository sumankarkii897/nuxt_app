<script setup lang="ts">
const { user, setUser } = useUser();
import { reactive } from "vue";

const errors = reactive({
  name: "",
  email: "",
  password: ""
});

const onSubmit = (e: Event) => {
  e.preventDefault();

  errors.name = "";
  errors.email = "";
  errors.password = "";

  let isValid = true;

  if (!user.value.name) {
    errors.name = "Name is required";
    isValid = false;
  }
  if (!user.value.email) {
    errors.email = "Email is required";
    isValid = false;
  }
  if (!user.value.password) {
    errors.password = "Password is required";
    isValid = false;
  } else if (user.value.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
    isValid = false;
  }

  if (!isValid) return;

  setUser(user.value.name, user.value.email, user.value.password);
  alert("User registered successfully!");
};
useHead({
  title:"register",
  meta:[{
    name:"description",content:"create new account"
  },
{ name: "keywords", content: "register, signup, account" }]
})
</script>

<template>
<div class="flex justify-center items-center h-screen bg-gray-200">
  <form class="h-auto w-80 flex flex-col justify-center items-center bg-white rounded-lg p-4" @submit="onSubmit">
    <h1 class="text-xl font-bold mb-4">Register User</h1>

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
      <input
        type="email"
        placeholder="Email"
        v-model="user.email"
        :class="['border p-2 rounded w-full', errors.email ? 'border-red-500' : 'border-gray-300']"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <div class="w-full mb-2">
      <input
        type="password"
        placeholder="Password"
        v-model="user.password"
        :class="['border p-2 rounded w-full', errors.password ? 'border-red-500' : 'border-gray-300']"
      />
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
    </div>

    <button type="submit" class="bg-amber-500 text-white rounded px-4 py-2 mt-2 w-full hover:bg-amber-600 cursor-pointer">
      Register
    </button>

    <p class="mt-3 text-sm">
      Already have an account?
      <NuxtLink to="/login" class="text-blue-600 underline">Login</NuxtLink>
    </p>
  </form>
</div>
</template>
