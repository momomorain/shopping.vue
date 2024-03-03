<script>


</script>

<template >
  <header class="bg-black text-white ">
    <div class="wrapper">
      <nav class="flex gap-2 text-orange-400 p-3" >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/count">count</RouterLink>
        <RouterLink to="/cityApi">cityApi</RouterLink>
        <RouterLink to="/shopping">shopping</RouterLink>
        <RouterLink to="/shoppingCar"><img src="./assets/image/hoppingcar.svg" alt=""></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
