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

const kokos = ref({
  obj1: 'val1', obj2: 'val2', obj3: 'val3'
})

const { obj1, obj2 } = kokos.value

const colorPickerKey = ref(0);

setTimeout(() => {
  store.changeColor()
  colorPickerKey.value++
}, 4000)

const color = ref('000000')
</script>

<template>
  <div class="greetings">
    <div class="pt-5"
         :class="{'pr-6': true}">

      {{ kokos }} | {{ obj1 }} | {{ obj2 }}
    </div>

    <h1 class="green">
      {{ msg }} | {{ globalColor }}
    </h1>

    <p>koko | {{ color }}</p>

    <p>kokos</p>

    <div>
      <div class="block p-3 text-sm">
        <div class="p-4"
             :class="{'p-3': true}">
          <div>kokos</div>
        </div>

        <a href="https://vite.dev/"
           target="_blank"
           rel="noopener">
          kokos
        </a>
      </div>

      <p>kokos</p>

      <Button label="Click Me pls"
              class="block bg-red-500 text-lg" />

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
                class="w-44" />
    {{ globalDate }}
  </div>
</template>
