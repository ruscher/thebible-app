import { defineStore } from 'pinia';
import { ref } from 'vue';

export const appStore = defineStore('app', () => {
  const menuOpen = ref(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  return {
    menuOpen,
    toggleMenu,
  };
});
