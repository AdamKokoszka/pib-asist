<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { ref } from 'vue'

const zodSchema = z.object({
  email: z.string().email('Nieprawidłowy email').nonempty('Email jest wymagany'),
  password: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków'),
});

const validationSchema = toTypedSchema(zodSchema);

const data = ref({
  email: 'test@gmail.pl',
  password: 'pass',
})

const submittedData = ref()

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: data.value,
});

const { value: email, errorMessage: emailError, handleBlur: handleEmailBlur } = useField<string>('email');
const { value: password, errorMessage: passwordError, handleBlur: handlePasswordBlur } = useField<string>('password');

const onSubmit = handleSubmit((values) => {
  submittedData.value = values
});
</script>

<template>
  <form>
    <div>
      <label for="email"
             class="mb-1 block">

        Email
      </label>

      <InputText id="email"
                 v-model="email"
                 placeholder="Wprowadź swój email"
                 @blur="handleEmailBlur" />

      <p v-if="emailError"
         class="text-red-500">

        {{ emailError }}
      </p>
    </div>

    <div class="mt-3">
      <label for="password"
             class="mb-1 block">

        Hasło
      </label>

      <Password id="password"
                v-model="password"
                placeholder="Wprowadź swoje hasło"
                @blur="handlePasswordBlur" />

      <p v-if="passwordError"
         class="text-red-500">
        {{ passwordError }}
      </p>
    </div>

    <Button label="Wyślij"
            class="mt-5"
            @click="onSubmit" />
  </form>
</template>
