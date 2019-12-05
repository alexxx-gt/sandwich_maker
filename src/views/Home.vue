<template>
  <v-layout class="home" fill-height>
    
    <Menu />
    <SandwichLayout />
  </v-layout>
</template>

<script lang='ts'>
// @ is an alias to /src
import Menu from "../components/Menu.vue";
import SandwichLayout from "../components/SandwichLayout.vue";

export default {
  name: "home",
  components: {
    Menu,
    SandwichLayout
  },
};
</script>
