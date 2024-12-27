<script lang="ts" setup>

</script>

<template>
  <div class="">
    <div class="max-w-[620px] mx-auto">
      <nav class="text-center mx-auto">
        <h1 class="inline">
          Pomodorino
        </h1>
        <RouterLink to="/">
          Timer
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
      <main class="relative h-screen overflow-hidden max-w-[640px]">
        <div class="bg-red-600">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
