import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

export const AuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
      950: '#0B3C91'
    }
  },
  components: {
    toggleswitch: {
      handle: { borderRadius: '4px' },
      colorScheme: {
        light: {
          root: {
            checkedBackground: '{amber.500}',
            checkedHoverBackground: '{amber.600}',
            borderRadius: '4px'
          },
          handle: {
            checkedBackground: '{amber.50}',
            checkedHoverBackground: '{amber.100}'
          }
        },
        dark: {
          root: {
            checkedBackground: '{amber.400}',
            checkedHoverBackground: '{amber.300}',
            borderRadius: '4px'
          },
          handle: {
            checkedBackground: '{amber.900}',
            checkedHoverBackground: '{amber.800}'
          }
        }
      }
    }
  }
})
