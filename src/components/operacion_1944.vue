<script setup>
import { ref } from 'vue'
import ImageCard from './image_card.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([])
const isLoading = ref(true)

async function fetchData() {
  const res = await fetch('https://98ec1f7320b02e63.mokky.dev/operation_1944')
  products.value = await res.json()
  isLoading.value = false
}
fetchData()

function goToDetail(id) {
  router.push({ name: 'card-detail-1944', params: { id } })
}
</script>
<!-- <div class="max-w-384hidden"></div>
  <div class="max-w-390 hidden"></div>
  <div class="max-w-340 hidden"></div>
  <div class="max-w-320 hidden"></div>
  <div class="max-w-200 hidden"></div>
  <div class="max-w-337 hidden"></div>
  <div class="max-w-288 hidden"></div> -->

<template>
  <div class="block max-w-1640 mx-auto text-center mt-150">
    <h2 class="font-ptsans text-40" id="operation1944">Операции 1944 года</h2>
    <div class="mt-30">
      <div  class="grid grid-cols-3 gap-10">
        <div
          v-for="product in products"
          :key="product.id"
          @click="goToDetail(product.id)"
          class="relative text-left"
        >
          <ImageCard
            :src="product.image?.small"
            :alt="product.name"
            :customClass="product.styles?.small"
          />
          <span
            class="absolute font-montserrat text-2xl text-white top-347 left-10"
            :class="product.styles.nameStyle"
            >{{ product.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
