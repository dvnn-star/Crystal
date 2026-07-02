<template>
  <section class="py-16 bg-white mx-0 md:mx-16">
    <div 
      class="container mx-auto relative overflow-hidden bg-cover bg-center p-8 md:p-16 rounded-3xl border border-gray-200 shadow-md min-h-[350px] flex items-center"
      style="background-image: url('/images/coffebeans.webp');"
    >
      <div class="absolute inset-0 bg-black/50 z-0"></div>

      <div class="relative z-10 max-w-xl space-y-4 text-white">
        <h2 class="text-3xl md:text-4xl font-bold text-cafe-cream font-space leading-tight">
          Check out our best coffee beans
        </h2>
        <p class="text-gray-200 text-sm md:text-base leading-relaxed">
          We source premium beans directly from farmers. Freshness and quality are in every bean.
        </p>
        
        <div class="pt-2">
          <Basebutton>Shop Beans</Basebutton>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Menjaga kepatuhan arsitektur Vue SFC
</script>