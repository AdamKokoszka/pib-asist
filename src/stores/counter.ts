import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const globalColor = ref('')
  const globalDate = ref()

  const changeColor = () => {
    globalColor.value = 'ffff00'
  }

  return { globalColor,
    changeColor,
    globalDate }
})
