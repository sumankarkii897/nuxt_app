<script setup>
const { data, pending, error } = await useFetch('/api/products')
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error</div>

  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 "
  >
    <Products
      v-for="product in data.products"
      :key="product.id"
      :productName="product.title"
      :productCategory="product.category"
      :productPrice="product.price"
      :stock="product.stock"
      :status="product.availabilityStatus"
      :productImage="product.thumbnail"
      :id="product.id"
    />
  </div>
</template>
