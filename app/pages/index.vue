<template>
  <div>
    <Appheader />
    <HeroSection />
    <FeatureCards />
    <MenuIntro />
    <StatsSection />
    
    <ProductSection
      title="MOST RECOMMENDED COFFEE"
      :products="coffeeProducts"
    />
    
    <ProductSection
      title="MOST RECOMMENDED DESSERTS"
      :products="dessertProducts"
    />
    
    <BeansBanner />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Gunakan auto-import komponen yang dimungkinkan oleh Nuxt (Nuxt 3)
// Jika tidak, Anda perlu mengimpor secara manual seperti:
// import AppHeader from '~/components/AppHeader.vue';

const coffeeProducts = [
  { image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=300', name: 'Cappuccino', description: 'Smooth espresso, rich milk, and a light milk foam.', price: 'Rp. 35K' },
  { image: 'images/icedcoffee.webp', name: 'Iced Coffee', description: 'Chilled brew, refreshing and light.', price: 'Rp. 30K' },
  { image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=300', name: 'Latte', description: 'Rich espresso, more steamed milk.', price: 'Rp. 38K' },
  { image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=300', name: 'Mocha', description: 'Espresso mixed with cocoa and milk.', price: 'Rp. 40K' },
  { image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=300', name: 'Americano', description: 'Rich espresso shots diluted with clean hot water.', price: 'Rp. 28K' },
  { image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=300', name: 'Caramel Macchiato', description: 'Espresso with vanilla syrup, milk, and caramel drizzle.', price: 'Rp. 42K' },
  { image: 'images/espresso.webp', name: 'Espresso ', description: 'Concentrated coffee brewed under intense pressure.', price: 'Rp. 22K' },
  { image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=300', name: 'Flat White', description: 'Bold espresso with a velvety layer of microfoam.', price: 'Rp. 38K' },
  { image: 'images/affogato.webp', name: 'Affogato Ice', description: 'A scoop of vanilla gelato drowned in a hot espresso shot.', price: 'Rp. 35K' },
  { image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=300', name: 'Cold Brew Nitro', description: 'Slow-steeped cold coffee infused with nitrogen.', price: 'Rp. 45K' }
];

const dessertProducts = [
  { image: 'images/brownie.webp', name: 'Brownie Energy Bites', description: 'Healthy and delicious energy snack.', price: 'Rp. 25K' },
  { image: 'images/french.webp', name: 'French Macarons', description: 'Delicate cookies with various cream flavors.', price: 'Rp. 50K' },
  { image: 'images/chocolate.webp', name: 'Chocolate Cupcake', description: 'Rich chocolate cake topped with buttercream frosting.', price: 'Rp. 30K' },
  { image: 'images/coffeetiramisu.webp', name: 'Coffee Tiramisu', description: 'A coffee-flavored classic Italian layered dessert.', price: 'Rp. 45K' },
  { image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=300', name: 'Butter Croissant', description: 'Flaky, golden-brown pastry layered with premium butter.', price: 'Rp. 28K' },
  { image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=300', name: 'New York Cheesecake', description: 'Rich, creamy cheesecake with a graham cracker crust.', price: 'Rp. 48K' },
  { image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300', name: 'Cinnamon Roll', description: 'Warm pastry swirled with cinnamon sugar and glaze.', price: 'Rp. 32K' },
  { image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=300', name: 'Apple Galette', description: 'Rustic tart filled with spiced fresh apple slices.', price: 'Rp. 40K' },
  { image: 'https://images.unsplash.com/photo-1616031037011-087000171abe?q=80&w=300', name: 'Red Velvet Slice', description: 'Layered red velvet cake with smooth cream cheese.', price: 'Rp. 42K' },
  { image: 'images/matcha.webp', name: 'Matcha Mille Crepe', description: 'Multi-layered crepe cake infused with pure Uji matcha.', price: 'Rp. 46K' }
];
</script>