<script setup lang="ts">
import shuffle from 'lodash-es/shuffle'
import { ref } from 'vue'

const array = [1, 2, 3, 4]
const shuffledArray = ref(shuffle(array))
</script>

<template>
  <div>
    <h1>This is an about page</h1>

    <div class="block w-full text-sm
                sm:w-20
                md:w-40 md:text-xl
                lg:w-72">

      <p>Response block</p>
    </div>

    <div class="block w-full text-sm sm:w-20 md:w-40 md:text-xl lg:w-72">
      <p>Response block w</p>
    </div>

    <p>{{ shuffledArray }}</p>
  </div>
</template>
