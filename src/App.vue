<template>
  <main-page />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MainPage from "./views/MainPage.vue";
export default defineComponent({
  name: "App",

  components: {
    MainPage,
  },
});
</script>
<style></style>
