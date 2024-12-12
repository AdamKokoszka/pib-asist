<script setup lang="ts">
import Button from 'primevue/button';
import ColorPicker from 'primevue/colorpicker'
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
import { storeToRefs } from 'pinia'

defineProps({
 msg: {
    type: String,
    default: ''
  }
})

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
  <div class="greetings">

    <h1 class="green">
      {{ msg }} | {{ globalColor }}
    </h1>

    <div>
      <div class="block p-3 text-sm">
        <div class="p-4"
             :class="{'p-3': true}">
          <div>kokos | {{ $t('common.DASHBOARD') }} | klfjkjwdbfkbhd</div>
        </div>

        <a href="https://vite.dev/"
           target="_blank"
           rel="noopener" />
      </div>

      <p>kokos</p>

      <Button label="Click Me pls" />

      <a href="https://vuejs.org/"
         target="_blank"
         rel="noopener">
        Vue 3
      </a>. What's next?
    </div>

    <input v-model="globalColor"
           type="text">

    <ColorPicker :key="colorPickerKey"
                 v-model="globalColor" />

    <DatePicker v-model="globalDate"
                show-icon
                fluid
                icon-display="input"
                :disabled-dates="[new Date('12-12-2024'), new Date('12-21-2024')]"
                class="w-44"
                :pt="{
                  day: ({ }) => ({
                    class: {
                      'bg-red-500': true
                    }
                  })
                }" />
    {{ globalDate }}
  </div>
</template>
