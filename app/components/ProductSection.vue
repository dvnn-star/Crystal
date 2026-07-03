<template>
  <section class="py-20 bg-cafe-beige" id="menu">
    <div class="container mx-auto px-4">
      
      <div class="flex items-center justify-between mb-10 max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-cafe-brown-dark font-space">
          {{ title }}
        </h2>
        
        <div class="flex items-center gap-3">
          <button
            @click="scroll('left')"
            class="w-10 h-10 rounded-full bg-white border border-cafe-gold/20 flex items-center justify-center text-cafe-brown-dark hover:bg-cafe-gold hover:text-white transition-colors duration-200 shadow-sm"
            aria-label="Scroll Left"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            @click="scroll('right')"
            class="w-10 h-10 rounded-full bg-white border border-cafe-gold/20 flex items-center justify-center text-cafe-brown-dark hover:bg-cafe-gold hover:text-white transition-colors duration-200 shadow-sm"
            aria-label="Scroll Right"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref="scrollContainer"
        class="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none md:scrollbar-thin scroll-smooth max-w-6xl mx-auto"
      >
        <div 
          v-for="(product, index) in products" 
          :key="index" 
          class="w-[280px] sm:w-[300px] shrink-0 snap-start"
        >
          <ProductCard :product="product" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  }
});

// Deklarasi template ref untuk mengikat elemen scroll kontainer
const scrollContainer = ref(null)

// Logika kalkulasi pergeseran: Lebar kartu (300px) + gap komponen (24px) = 324px
const scroll = (direction) => {
  if (!scrollContainer.value) return

  const scrollAmount = 324
  if (direction === 'left') {
    scrollContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  } else {
    scrollContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Menyembunyikan track scrollbar mentah pada device mobile agar UI bersih */
@media (max-width: 768px) {
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: rgba(92, 61, 46, 0.05);
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(184, 134, 11, 0.3);
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgba(184, 134, 11, 0.5);
}
</style>