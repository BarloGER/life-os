<script setup lang="ts">
import {ref, watch} from "vue";
import {changeLanguage, languageOptions, preferredLanguage, type SupportedLocale} from "../../../shared/translations";
import {toggleTheme} from "../../../useTheme.ts";

const selectedLanguage = ref(preferredLanguage);
watch(selectedLanguage, (newLang) => {
  changeLanguage(newLang)
})

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      console.log('Navigiere zu Home')
    }
  },
  {
    icon: 'pi pi-cog',
    items: [
      {
        label: 'Profil',
        icon: 'pi pi-user',
        command: () => {
          console.log('Profil geöffnet')
        }
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          console.log('Ausgeloggt')
        }
      },
      {
        label: 'Sprache',
        icon: 'pi pi-globe',
        items: languageOptions.map(lang => ({
          label: lang.label,
          command: () => changeLanguage(lang.value as SupportedLocale)
        }))
      },
      {
        label: 'Design',
        icon: 'pi pi-design',
        command: () => toggleTheme()
      }
    ]
  }
])
</script>

<template>
  <Menubar :model="items"/>
  <Button @click="toggleTheme">
    Dark/Light umschalten
  </Button>
</template>

<style scoped lang="css">

</style>