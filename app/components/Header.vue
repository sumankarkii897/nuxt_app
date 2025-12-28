<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'

const { logoutUser } = useUser()
const userName = useLocalStorage('userName', '')

const isMenuOpen = ref(false)

const handleLogout = () => {
  logoutUser()
  userName.value = ''
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-white text-gray-800 w-full shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center p-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold">Nuxt App</NuxtLink>

      <!-- Nav links (centered on lg+) -->
      <div class="hidden lg:flex flex-1 justify-center space-x-6">
        <NuxtLink to="/" class="hover:text-amber-400">Home</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-amber-400">Contact</NuxtLink>
        <NuxtLink to="/about" class="hover:text-amber-400">About</NuxtLink>
        <NuxtLink to="/products" class="hover:text-amber-400">Products</NuxtLink>
      </div>

      <!-- Right section: search + user/login -->
      <div class="flex items-center space-x-4 flex-1 lg:flex-none justify-end">
        <div class="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            class="w-full pl-3 pr-10 py-1 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Icon
            icon="icon-park-outline:search"
            class="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <div v-if="userName" class="flex items-center space-x-2">
            <NuxtLink to="/profile" class="flex items-center space-x-1 hover:text-amber-400">
              <Icon icon="mdi:account" width="24" height="24" />
              <span>{{ userName }}</span>
            </NuxtLink>
            <button @click="handleLogout" class="hover:text-red-400">Logout</button>
          </div>
          <NuxtLink v-else to="/login" class="hover:text-amber-400">Login</NuxtLink>
        </div>

        <!-- Mobile hamburger -->
        <button class="lg:hidden ml-2" @click="toggleMenu">
          <Icon icon="mdi:hamburger-menu" width="36" height="36" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="lg:hidden bg-gray-700 transition-all duration-300">
      <ul class="flex flex-col p-4 space-y-2">
        <NuxtLink to="/" class="hover:text-amber-400">Home</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-amber-400">Contact</NuxtLink>
        <NuxtLink to="/about" class="hover:text-amber-400">About</NuxtLink>
        <NuxtLink to="/products" class="hover:text-amber-400">Products</NuxtLink>

        <div v-if="userName" class="flex flex-col mt-2">
          <NuxtLink to="/profile" class="flex items-center space-x-1 hover:text-amber-400">
            <Icon icon="mdi:account" width="22" height="22" />
            <span>{{ userName }}</span>
          </NuxtLink>
          <button @click="handleLogout" class="hover:text-red-400 mt-1">Logout</button>
        </div>
        <NuxtLink v-else to="/login" class="hover:text-amber-400">Login</NuxtLink>

        <!-- Mobile search -->
        <div class="relative mt-2">
          <input
            type="text"
            placeholder="Search..."
            class="w-full pl-3 pr-10 py-1 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Icon
            icon="icon-park-outline:search"
            class="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </ul>
    </div>
  </header>
</template>
