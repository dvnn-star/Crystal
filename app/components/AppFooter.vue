<template>
  <footer class="bg-[#1e140f] text-gray-400 py-16 border-t border-white/5">
    <div class="container mx-auto px-4 max-w-6xl">
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pb-12">
        
        <div v-for="(links, title) in footerLinks" :key="title" class="space-y-4">
          <h5 class="text-white font-bold text-sm tracking-wider uppercase font-space">
            {{ formatTitle(title) }}
          </h5>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link">
              <NuxtLink 
                to="#" 
                class="text-sm hover:text-cafe-gold transition-colors duration-200 block py-1"
              >
                {{ link }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-4 col-span-2 sm:col-span-1">
          <h5 class="text-white font-bold text-sm tracking-wider uppercase font-space">
            Social Media
          </h5>
          <div class="flex items-center gap-3">
            <NuxtLink to="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-cafe-gold text-white flex items-center justify-center transition-all duration-200" aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </NuxtLink>
            <NuxtLink to="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-cafe-gold text-white flex items-center justify-center transition-all duration-200" aria-label="TikTok">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.05.73.65 1.62 1.11 2.58 1.34v3.91a8.31 8.31 0 01-4.31-1.24c-.01 2.44-.02 4.88-.03 7.32-.08 2.78-1.52 5.43-4.05 6.6-2.07.98-4.57.99-6.66-.02-2.58-1.22-3.99-4.04-3.78-6.87.21-2.91 2.4-5.46 5.29-5.83V13.3c-1.12.16-2.07.97-2.31 2.08-.34 1.48.51 3.07 1.96 3.47 1.17.34 2.51-.11 3.12-1.18.25-.49.33-1.05.33-1.6V.02z"/></svg>
            </NuxtLink>
            <NuxtLink to="#" class="w-9 h-9 rounded-full bg-white/5 hover:bg-cafe-gold text-white flex items-center justify-center transition-all duration-200" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </NuxtLink>
          </div>
        </div>

      </div>

      <div class="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© 2026 CRYSTAL CAFE. All Rights Reserved.</p>
        <div class="flex gap-4">
          <NuxtLink to="#" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="#" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const footerLinks = {
  privacy: ['Services', 'Privacy Policy', 'Credits'],
  services: ['Shop', 'Order Online', 'Offers'],
  aboutUs: ['Our Story', 'Our Coffee', 'Our Values'],
  features: ['Gift Cards', 'Delivery Areas', 'Cafe Location'],
  information: ['Business', 'Legal', 'Careers'],
};

// Fungsi pembantu untuk membenahi teks casing camelCase menjadi format spasi rapi
const formatTitle = (title) => {
  return title
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}
</script>