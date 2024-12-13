<script setup lang="ts">
import ColorPicker from 'primevue/colorpicker'
import DatePicker from 'primevue/datepicker'
import CFormValidate from '@/components/form-validate.component.vue'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { globalColor, globalDate } = storeToRefs(store)

store.getGeneralSettings()

const colorPickerKey = ref(0);

setTimeout(() => {
  store.changeColor()
  colorPickerKey.value++
}, 4000)

</script>

<template>
  <div class="mt-3 flex">
    <div class="w-1/3">
      <input v-model="globalColor"
             type="text">

      <ColorPicker :key="colorPickerKey"
                   v-model="globalColor"
                   class="mb-3" />

      <DatePicker v-model="globalDate"
                  show-icon
                  fluid
                  icon-display="input"
                  :disabled-dates="[new Date('12-12-2024'), new Date('12-21-2024')]"
                  class="w-44"
                  :pt="{
                    day: ({context}) => ({
                      class: {
                        'bg-blue-500 rounded-full w-2 h-2 m-auto': context.date.day < new Date().getDate()
                      }
                    })
                  }" />

      <span>{{ globalDate }}</span>
    </div>

    <div class="w-2/3">
      <c-form-validate />
    </div>
  </div>
</template>
