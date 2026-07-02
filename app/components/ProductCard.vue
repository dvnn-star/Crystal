<template>
  <div class="bg-white rounded-3xl p-6 shadow-xl flex flex-col items-center text-cafe-brown-dark h-full">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-2xl mb-4" />
    <h4 class="text-xl font-bold mb-2">{{ product.name }}</h4>
    <p class="text-sm text-gray-600 mb-4 text-center leading-relaxed">{{ product.description }}</p>
    
    <div class="w-full flex justify-center items-center mt-auto pt-4 border-t border-gray-100">
      <p class="text-2xl font-black text-cafe-gold">{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>