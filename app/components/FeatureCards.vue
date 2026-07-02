<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
      <div v-for="(item, index) in features" :key="index" class="flex flex-col items-center text-center max-w-sm mx-auto">
        <div :class="['w-28 h-28 rounded-full flex items-center justify-center mb-6 overflow-hidden shadow-sm', item.bgColor]">
          <img :src="item.icon" :alt="item.title" class="w-full h-full object-cover" />
        </div>
        
        <h3 class="text-cafe-brown-dark font-bold text-lg mb-2 font-space">
          {{ item.title }}
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed max-w-[280px]">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { 
    icon: '/images/1.webp', 
    title: 'Discover coffee with a click.', 
    description: 'Fresh coffee is always a good idea. Select your blend and order directly from the app.', 
    bgColor: 'bg-cafe-cream' 
  },
  { 
    icon: '/images/2.webp', 
    title: 'Seamless delivery with zero hassle.', 
    description: 'Enjoy your favorite coffee without leaving your room. Fresh, hot, and right on time.', 
    bgColor: 'bg-[#fde9eb]' 
  },
  { 
    icon: '/images/3.webp', 
    title: 'Stay updated on your order status.', 
    description: 'Track your coffee from the machine to your doorstep. Know exactly when it arrives.', 
    bgColor: 'bg-[#e8f5f1]' 
  },
];
</script>