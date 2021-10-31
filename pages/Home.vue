<template>
  <div style="height: 700px">
    <NavbarVue />

    <BackgroundContentVue />
    <div
      v-rellax="{
        // Rellax Options
        // See: https://github.com/dixonandmoe/rellax#features
        speed: 10,
      }"
      style="background-color: white"
    >
      <ServicesVue />

      <Technology />
    </div>
  </div>
</template>
<script>
import NavbarVue from "~/components/Navbar.vue";
import BackgroundContentVue from "../components/Simple/BackgroundContent.vue";
import ServicesVue from "../components/Simple/Services.vue";
import Technology from "../components/Simple/Technology.vue";

export default {
  name: "Home",
  components: {
    BackgroundContentVue,
    NavbarVue,
    ServicesVue,
    Technology,
  },
};
</script>
