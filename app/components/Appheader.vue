  <template>
    <header class="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div class="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div class="flex items-center gap-2">
          <img src="/images/crystal.webp" alt="Logo" class="rounded-full w-16 h-16" />
        </div>

        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-cafe-brown-dark hover:text-cafe-gold md:hidden focus:outline-none"
          aria-label="Main Menu"
        >
          <svg v-if="!isMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav class="hidden md:flex items-center gap-6 text-cafe-brown-dark font-medium">
          <NuxtLink to="/" class="hover:text-cafe-gold font-space">Home</NuxtLink>
          <NuxtLink to="/#menu" class="hover:text-cafe-gold font-space">Menu</NuxtLink>
          <NuxtLink to="/order" class="hover:text-cafe-gold font-space">Order</NuxtLink>
          <NuxtLink to="/#contact" class="hover:text-cafe-gold font-space">Contact Us</NuxtLink>
        </nav>

        <div class="hidden md:flex items-center gap-4">
          <Basebutton>
           <nuxt-link to="/order">Order Now</nuxt-link>
          </Basebutton>
        </div>
      </div>

      <div v-show="isMenuOpen" class="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-3 shadow-lg">
        <nav class="flex flex-col gap-2 text-cafe-brown-dark font-medium">
          <NuxtLink to="/" class="hover:text-cafe-gold font-space py-2 border-b border-gray-50 block" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/#menu" class="hover:text-cafe-gold font-space py-2 border-b border-gray-50 block" @click="closeMenu">Menu</NuxtLink>
          <NuxtLink to="/order" class="hover:text-cafe-gold font-space py-2 border-b border-gray-50 block" @click="closeMenu">Order</NuxtLink>
          <NuxtLink to="/#contact" class="hover:text-cafe-gold font-space py-2 block" @click="closeMenu">Contact Us</NuxtLink>
        </nav>
        <div class="pt-4 border-t border-gray-100">
          <Basebutton class="w-full text-center font-space text-gold">
            <nuxt-link to="/order">Order Now</nuxt-link>
          </Basebutton>
        </div>
      </div>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue'

  // State untuk mengontrol visibilitas menu mobile
  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }
  </script>