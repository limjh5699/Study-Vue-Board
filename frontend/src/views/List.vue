<template>
  <div id="wrap">
    <List_Top />
    <List_Main />
  </div>
</template>

<script lang="ts">
import List_Top from "@/components/List/Top.vue";
import List_Main from "@/components/List/Main.vue";

export default {
  name: "ListView",
  components: {
    List_Top,
    List_Main,
  },
};
</script>

<style scoped>
#wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
</style>
