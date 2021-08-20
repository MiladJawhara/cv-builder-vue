<template>
  <div class="container">
    <Row />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Row from "@/components/Row.vue";
import ColumnsManager from "@/Classes/ColumnsManager";
export default defineComponent({
  name: "MainPage",
  components: {
    Row,
  },
  methods: {
    test() {
      ColumnsManager.run();
    },
  },
});
</script>
<style lang=""></style>
