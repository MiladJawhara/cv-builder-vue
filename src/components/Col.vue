<template>
  <div
    ref="root"
    :class="'col-root col-12 col-md-' + columnData.size"
    :style="columnStyle"
  >
    <div v-show="mouseOver" class="columnOverlay">
      <span class="mdi mdi-cog btn icon"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, StyleValue } from "vue";
import { ColumnData } from "@/types";
import ColumnsManager from "@/Classes/ColumnsManager";

export default defineComponent({
  mounted() {
    this.$refs;
    ColumnsManager.addColumn({ callBack: this.print });
  },
  props: {
    columnData: {
      type: Object as PropType<ColumnData>,
      required: true,
    },
  },
  data() {
    return {
      mouseOver: false,
    };
  },
  methods: {
    print() {
      console.log(this.columnData);
    },
  },
  computed: {
    columnStyle(): StyleValue {
      return {
        backgroundColor: this.columnData.bgColor,
      };
    },
  },
});
</script>
<style lang="css">
.col-root {
  position: relative;
}
.col-root .columnOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
