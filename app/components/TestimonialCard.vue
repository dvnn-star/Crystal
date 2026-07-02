<template>
  <div class="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center text-center text-cafe-brown-dark">
    <img :src="testimonial.image" :alt="testimonial.name" class="w-20 h-20 rounded-full mb-4 border-4 border-cafe-gold" />
    <h4 class="text-xl font-bold">{{ testimonial.name }}</h4>
    <div class="flex text-cafe-gold my-3">
      <span v-for="i in 5" :key="i">★</span>
    </div>
    <p class="text-gray-600 text-sm leading-relaxed">{{ testimonial.text }}</p>
  </div>
</template>

<script setup>
defineProps({
  testimonial: Object,
});
</script>