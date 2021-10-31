<template>
  <Home />
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./Home.vue";
export default Vue.extend({
  components: { Home },

  created() {
    console.log("index created");
  },
});
</script>
