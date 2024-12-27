import { defineStore } from 'pinia'
import { ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the stores and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the stores across your application
export const useCounterStore = defineStore('counter', () => {
  const count = ref(25)
  const shortBreak = ref(5)
  const longBreak = ref(15)

  function updateCounter(newCount: number, newShortBreak: number, newLongBreak: number) {
    count.value = newCount
    shortBreak.value = newShortBreak
    longBreak.value = newLongBreak
  }

  return { count, shortBreak, longBreak, updateCounter }
})
