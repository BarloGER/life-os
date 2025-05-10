import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import {i18n} from "./shared/translations"
import { initTheme } from './useTheme';
import './style.css';

initTheme();

const app = createApp(App)
app.use(i18n)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue'
      },
      darkModeSelector: '.dark-mode',
    }
  }
})

app.mount('#app')
