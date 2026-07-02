<template>
  <section class="py-24 bg-cafe-brown-dark text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16 text-cafe-gold">Step Into the warmth of our coffee loving community</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  { image: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'John Doe', rating: 5, text: 'The atmosphere is just perfect! Their latte is a must-try. Fast service and friendly staff.' },
  { image: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Jane Smith', rating: 5, text: 'I love how clean everything is. The coffee is fresh and the desserts are delicious!' },
  { image: 'https://randomuser.me/api/portraits/men/55.jpg', name: 'Adam Ali', rating: 5, text: 'My goto place for coffee. Consistently good and love the interior. Highly recommend.' },
];
</script>