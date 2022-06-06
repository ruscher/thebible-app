<template>
  <q-layout view="hHh LpR fFf">

    <q-header class="topbar" reveal elevated>
      <q-toolbar>
        <q-btn flat dense icon="menu" aria-label="Menu" @click="app.toggleMenu" />
        <q-toolbar-title>
          {{ $t(currentRoute as string) }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <app-menu />

    <q-page-container class="main-content">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import AppMenu from 'src/components/AppMenu.vue';
import { appStore } from 'src/stores/app';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const app = appStore();

const currentRoute = computed(() => useRoute().name);

</script>
