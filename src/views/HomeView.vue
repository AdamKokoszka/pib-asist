<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <p class="block w-fit bg-red-500">
      {{ $t('common.DASHBOARD') }} | {{ $t('asdasd') }}
    </p>

    <TheWelcome />
  </main>
</template>
