<script setup lang="ts">
import CDashboard from '@/components/dashboard-forms.component.vue'
</script>

<template>
  <main>
    <p class="mb-4 text-center text-2xl font-bold">
      {{ $t('common.DASHBOARD') }}
    </p>

    <c-dashboard />
  </main>
</template>
