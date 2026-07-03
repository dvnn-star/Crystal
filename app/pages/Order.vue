<template>
  <Appheader />
  <div class="min-h-screen bg-cafe-beige text-cafe-brown-dark py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <div class="mb-12 text-center md:text-left">
        <h1 class="text-4xl font-black font-space tracking-tight mb-2">Place Your Order</h1>
        <p class="text-gray-600">Select your favorite items and complete the detail below.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-7 xl:col-span-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              v-for="product in currentProducts"
              :key="product.name"
              class="bg-white rounded-xl shadow border border-gray-100 overflow-hidden"
            >
              <div class="flex p-4 gap-4">
                <img
                  :src="sanitizeImagePath(product.image)"
                  :alt="product.name"
                  class="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />

                <div class="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div class="flex justify-between items-start gap-2">
                      <h3 class="font-bold text-cafe-brown-dark text-sm">
                        {{ product.name }}
                      </h3>
                      <span class="font-bold text-cafe-gold whitespace-nowrap">
                        {{ product.price }}
                      </span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">
                      {{ product.description }}
                    </p>
                  </div>

                  <div class="flex justify-between items-center mt-4">
                    <span class="text-xs text-gray-400 font-semibold">
                      Quantity
                    </span>

                    <div
                      v-if="getItemQuantity(product.name) > 0"
                      class="flex items-center gap-2"
                    >
                      <button
                        @click="updateQuantity(product, -1)"
                        class="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span class="font-bold">
                        {{ getItemQuantity(product.name) }}
                      </span>
                      <button
                        @click="updateQuantity(product, 1)"
                        class="w-8 h-8 rounded bg-cafe-brown-dark text-white"
                      >
                        +
                      </button>
                    </div>

                    <button
                      v-else
                      @click="updateQuantity(product, 1)"
                      class="px-4 py-2 rounded-lg bg-cafe-gold text-white font-semibold hover:opacity-90"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 xl:col-span-4 bg-white rounded-3xl p-6 shadow-md border border-cafe-gold/10 sticky top-24">
          <h2 class="text-xl font-bold font-space border-b border-gray-100 pb-4 mb-6">Order Summary</h2>
          
          <form @submit.prevent="submitOrder" class="space-y-6">
            <div class="space-y-4">
              <div>
                <label class="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-1.5">Customer Name</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  placeholder="e.g. John Doe"
                  class="w-full bg-cafe-beige/30 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-gold transition-all"
                  required
                />
              </div>
              <div>
                <label class="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-1.5">Table Number</label>
                <input 
                  v-model="form.table" 
                  type="number" 
                  placeholder="e.g. 05"
                  class="w-full bg-cafe-beige/30 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-gold transition-all"
                  required
                />
              </div>
              <div>
                <label class="block text-xs uppercase tracking-wider font-bold text-gray-500 mb-1.5">Special Notes (Optional)</label>
                <textarea 
                  v-model="form.notes" 
                  rows="2"
                  placeholder="Less sugar, extra ice, etc..."
                  class="w-full bg-cafe-beige/30 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-gold transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <div class="border-t border-b border-gray-100 py-4 max-h-[180px] overflow-y-auto space-y-3">
              <p v-if="cartItems.length === 0" class="text-center text-sm text-gray-400 py-4 italic">
                No items selected yet.
              </p>
              
              <div v-for="item in cartItems" :key="item.name" class="flex items-center justify-between text-sm">
                <div class="flex-1 pr-4">
                  <p class="font-bold text-cafe-brown-dark">{{ item.name }}</p>
                  <p class="text-xs text-gray-400">{{ item.price }} &times; {{ item.quantity }}</p>
                </div>
                <span class="font-semibold text-gray-700">
                  Rp. {{ formatNumber((item.numericPrice * item.quantity)) }}K
                </span>
              </div>
            </div>

            <div class="space-y-2.5 text-sm border-b border-gray-100 pb-4">
              <div class="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>Rp. {{ formatNumber(subtotal) }}K</span>
              </div>
              <div class="flex justify-between text-gray-500">
                <span>Government Tax (10%)</span>
                <span>Rp. {{ formatNumber(tax) }}K</span>
              </div>
            </div>

            <div class="flex justify-between items-center text-lg font-black">
              <span>Total Amount</span>
              <span class="text-cafe-gold">Rp. {{ formatNumber(totalPrice) }}K</span>
            </div>

            <Basebutton 
              type="submit" 
              class="w-full py-3.5 rounded-xl font-bold tracking-wide"
              :disabled="cartItems.length === 0"
            >
              Confirm & Pay Order
            </Basebutton>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

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

const parsePrice = (priceStr) => {
  const cleaned = priceStr.replace(/[^0-9]/g, '');
  return parseInt(cleaned, 10) || 0;
}

const productsState = reactive({
  coffee: coffeeProducts.map(p => ({ 
    ...p, 
    name: p.name.trim(), 
    numericPrice: parsePrice(p.price) 
  })),
  dessert: dessertProducts.map(p => ({ 
    ...p, 
    name: p.name.trim(), 
    numericPrice: parsePrice(p.price) 
  }))
})

const activeTab = ref('coffee')
const cart = ref({}) 
const form = ref({ name: '', table: '', notes: '' })

const currentProducts = computed(() => {
  return activeTab.value === 'coffee' ? productsState.coffee : productsState.dessert
})

const cartItems = computed(() => {
  return Object.values(cart.value)
})

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0)
})

const tax = computed(() => {
  return subtotal.value * 0.1
})

const totalPrice = computed(() => {
  return subtotal.value + tax.value
})

const sanitizeImagePath = (path) => {
  if (path.startsWith('http')) return path;
  return path.startsWith('/') ? path : `/${path}`;
}

const getItemQuantity = (name) => {
  return cart.value[name]?.quantity || 0
}

const updateQuantity = (product, change) => {
  const currentQty = getItemQuantity(product.name)
  const newQty = currentQty + change

  if (newQty <= 0) {
    delete cart.value[product.name]
  } else {
    cart.value[product.name] = {
      name: product.name,
      price: product.price,
      numericPrice: product.numericPrice,
      quantity: newQty
    }
  }
}

const formatNumber = (num) => {
  return Number(num).toFixed(0)
}

const submitOrder = () => {
  if (cartItems.value.length === 0) return

  const payload = {
    customer: form.value,
    items: cartItems.value.map(item => ({
      name: item.name,
      quantity: item.quantity,
      priceEach: item.price
    })),
    billing: {
      subtotal: `${subtotal.value}K`,
      tax: `${tax.value}K`,
      total: `${totalPrice.value}K`
    }
  }

  console.log('Order Confirmed Payload:', payload)
  alert(`Thank you ${form.value.name}! Your order has been successfully placed for Table ${form.value.table}.`)
  
  cart.value = {}
  form.value = { name: '', table: '', notes: '' }
}
</script>