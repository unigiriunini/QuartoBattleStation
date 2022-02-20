<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="p-10 border-b-4">
        <NuxtLink to="/">
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-10">ELO</button>
        </NuxtLink>
        <NuxtLink to="/matches">
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Matches</button>
        </NuxtLink>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
</script>
