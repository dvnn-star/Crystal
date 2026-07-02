<template>
  <button
    :class="[
      'px-6 py-2 rounded-full font-semibold transition-colors duration-200',
      type === 'primary'
        ? 'bg-cafe-gold text-white hover:bg-[#a67c0a]'
        : 'bg-cafe-beige text-cafe-gold border border-cafe-gold hover:bg-[#f7ebce]',
      size === 'large' ? 'px-8 py-3 text-lg' : '',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary', // 'primary' atau 'secondary'
  },
  size: {
    type: String,
    default: 'medium', // 'medium' atau 'large'
  },
});
</script>