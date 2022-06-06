<template>
  <div class="weekday text-h4">{{ locale_weekday }}</div>
  <div class="datetime text-h5">{{ locale_date }}</div>
</template>

<style lang="scss" scoped>
  div {
    color: $text_default;
  }
</style>

<script lang="ts" setup>
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useQuasar } from 'quasar';

const $q = useQuasar();
let lang = $q.lang.getLocale();

if (!lang) {
  lang = 'en';
}

dayjs.extend(localizedFormat);
dayjs.locale(lang.toLowerCase());

const current_date = dayjs().locale(lang);
const locale_weekday = current_date.format('dddd').ucwords();
const locale_date = current_date.format('LL');

</script>
