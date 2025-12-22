<script setup lang="ts">




</script>

<template>
  <div class="bg-gray-400 text-black ">
    <!-- <p>Some default layout content shared across all pages</p> -->
  <Header/>
  
  <main>
      <slot />
      <!-- The content of the page will be displayed in the <slot/> component -->
  </main>
    <Footer/>
  </div>
</template>
