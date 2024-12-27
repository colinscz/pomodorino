<script lang="ts" setup></script>

<template>
  <h1>Pomodorino!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/timer">
      Go to Timer
    </RouterLink>
    <RouterLink to="/about">
      Go to About
    </RouterLink>
  </nav>
  <main class="relative h-screen overflow-hidden bg-red-900 text-white">
    <RouterView />
  </main>
</template>
