<template>
  <q-drawer v-model="app.menuOpen" show-if-above bordered overlay elevated>
    <q-list>
      <!-- <q-item-label header>&nbsp;</q-item-label> -->

        <div v-for="(group, index_group) in links" :key="index_group">
          <q-item clickable tag="a" v-for="(link, index_link) in group" :key="index_link" :to="link.path"
            v-show="link.status == Status.ENABLE && link.visible == Visible.YES">
            <q-item-section v-if="link.icon" avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ $t(link.name) }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>

      </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { links, Status, Visible } from 'src/router/routes';
import { appStore } from 'src/stores/app';

const app = appStore();

</script>
