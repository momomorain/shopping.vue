<script>


</script>

<template >
  <header class="bg-black text-white font-bold">
    <div class="wrapper">
      <nav class="flex text-orange-400 p-3 justify-between" >
        <div class="flex gap-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/count">count</RouterLink>
          <RouterLink to="/cityApi">cityApi</RouterLink>
          <RouterLink to="/shopping">shopping</RouterLink>
        </div>
        <div class="mr-12">
          <RouterLink to="/shoppingCar"><img src="./assets/image/shoppingcar.svg" alt=""></RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
