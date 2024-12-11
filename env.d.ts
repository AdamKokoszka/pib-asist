/// <reference types="vite/client" />
import { TranslateResult } from 'vue-i18n';

declare global {
  const $t: (key: string, ...params: unknown[]) => TranslateResult;
}
