<template>
  <section class="relative bg-cover bg-center h-[600px]" style="background-image: url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop');">
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10 px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
        WELCOME TO <span class="text-cafe-gold">CRYSTAL CAFE</span>
      </h1>
      
      <p class="text-xl max-w-3xl mb-12 text-gray-200 leading-relaxed">
        Make your everyday special with our handcrafted coffee and freshly baked goods. 
        We promise you <strong class="text-white">clarity in every cup</strong>, from bean to brew.
      </p>
      
      <Basebutton 
        size="large" 
        class="bg-cafe-gold hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105"
      >
        Order Now
      </Basebutton>
    </div>
  </section>
</template>