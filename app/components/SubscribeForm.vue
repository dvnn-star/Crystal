<template>
  <section class="py-16 bg-white relative overflow-hidden">

    <div class="container mx-auto px-4 relative z-10">
      <div class="bg-cafe-black p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative">
        <div class="space-y-4">
          <h2 class="text-4xl font-bold">Subscribe to our newsletters</h2>
          <p class="text-gray-300">Don't miss a beat! Keep up to date with new coffees, promotions, and tips.</p>
        </div>
        
        <form class="flex items-center gap-4 w-full md:w-auto" @submit.prevent>
          <input type="email" placeholder="Enter your email" class="bg-white text-gray-800 px-6 py-3 rounded-full flex-grow md:w-80 border border-gray-300 focus:ring-2 focus:ring-cafe-gold outline-none" required />
          <BaseButton type="submit">Subscribe</BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>