<script setup>
const { data, pending, error } = await useFetch('/api/products')
useHead({
  title: "Products ",
  meta: [{
    name: "description", content: "Explore our products"
  },
{property:"og:title",content:"Products"},
{property:"og:description",content:"Explore our products"},
{ name:"keywords" , content:"products, items, clothing , cosmetics , toys , perfumes , furnitures  "},
{
  property:"og:type", content:"website"
}
]
})
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error</div>

  <div v-else class="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 ">
    <Products v-for="product in data.products" :key="product.id" :productName="product.title"
      :productCategory="product.category" :productPrice="product.price" :stock="product.stock"
      :status="product.availabilityStatus" :productImage="product.thumbnail" :id="product.id" />
  </div>
</template>
