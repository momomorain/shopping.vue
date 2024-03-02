<script>


</script>

<template>

  <header class="bg-black text-white">
    <div class="wrapper">
      <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/count">count</RouterLink>
        <RouterLink to="/cityApi">cityApi</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
