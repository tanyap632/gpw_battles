<script setup>
function scrollToOperation() {
  const element = document.getElementById('operation1941')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="block max-w-1640 mx-auto mt-21 bg-first-img h-744 mb-220">
    <h1 class="text-8xl font-ptsans leading-124 text-E41D1D pl-15 pt-13">
      <span class="text-white">СРАЖЕНИЯ</span> ВЕЛИКОЙ ОТЕЧЕСТВЕННОЙ ВОЙНЫ
    </h1>
    <button
      class="text-white text-2xl font-montserrat w-800 h-146 bg-E41D1D rounded-50 mt-218"
      @click="scrollToOperation"
    >
      Подрбнее
    </button>
  </div>
</template>
