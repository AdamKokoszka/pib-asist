import './assets/main.css'
import en from '@/i18n/en/en'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: { en }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, { theme: { preset: Aura } })

app.mount('#app')
