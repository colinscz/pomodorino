<script lang="ts" setup>
import { useCounterStore } from '@/stores/counterStore'

// access the `stores` variable anywhere in the component ✨
const store = useCounterStore()

const timer = store.count
const shortBreak = store.shortBreak
const longBreak = store.longBreak
</script>

<template>
  <div class="bg-red-500">
    <span>
      <button class="mx-2 bg-red-400">Progress</button>
      <button class="mx-2 bg-red-400">Settings</button>
    </span>
    <div class="max-w-[620px] mx-auto">
      <div class="text-center bg-red-400 border-rounded-md">
        <button class="mx-2 bg-red-400">
          Pomodoro
        </button>
        <button class="mx-2 bg-red-400">
          Short Pause
        </button>
        <button class="mx-2 bg-red-400">
          Long Pause
        </button>
        <div class="text-4xl my-10">
          {{ timer }}
        </div>
        <button class="px-10 bg-white text-red-900 my-5 text-xl">
          Start
        </button>
      </div>
      <div class="text-center">
        #1
        Time to focus!
        <div class="my-5">
          <h3 class="mb-5">
            Tasks to do
          </h3>
        </div>
        <button class="border-dotted border-spacing-10 border-2 px-16 py-5">
          + Add Task
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
