<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex flex-col items-center">
    <img alt="Vue logo"
         class="logo"
         src="@/assets/logo.svg"
         width="125"
         height="125">

    <div class="mt-4">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>

        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
