import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const globalColor = ref('')
  const globalDate = ref()

  const settingsError = ref()

  const changeColor = () => {
    globalColor.value = 'ffff00'
  }

  const getGeneralSettings = async (): Promise<void> => {
    try {
      await axios.get('general-settings')
    } catch (e) {
      settingsError.value = e
    }
  }

  return {
 globalColor,
    changeColor,
    getGeneralSettings,
    globalDate
}
})
