import './assets/main.css'
import en from '@/i18n/en/en'
import PrimeVue from 'primevue/config';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { AuraPreset } from './primevue';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: { en }
})

const app = createApp(App)

app.component('Field', Field);
app.component('VeeForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, { theme: { preset: AuraPreset } })

app.mount('#app')
