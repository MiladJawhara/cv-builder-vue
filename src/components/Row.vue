<template>
  <div class="row">
    <Col v-for="col in sortedColumns" :key="col.id" :columnData="col" />
  </div>
</template>
<script lang="ts">
import { ColumnData } from "@/types";
import { defineComponent } from "vue";
import Col from "./Col.vue";

export interface IData {
  columns: ColumnData[];
}
export default defineComponent({
  name: "Row",
  components: { Col },
  data(): IData {
    return {
      columns: [
        {
          id: "321",
          bgColor: "#ddd",
          size: 9,
          order: 2,
        },
        {
          id: "654",
          bgColor: "blue",
          size: 3,
          order: 1,
        },
      ],
    };
  },
  computed: {
    sortedColumns(): ColumnData[] {
      return [...this.columns].sort((col1, col2) => {
        if (!col1.order) return -1;
        if (!col2.order) return 1;
        return col1.order - col2.order;
      });
    },
  },
});
</script>
<style scoped>
.row {
  min-height: 100vh;
}
</style>
