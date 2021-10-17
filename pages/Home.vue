<template>
  <div>
    <NavbarVue />
    <BackgroundContentVue />
    <ServicesVue />
  </div>
</template>
<script>
import NavbarVue from "~/components/Navbar.vue";
import BackgroundContentVue from "../components/Simple/BackgroundContent.vue";
import ServicesVue from "../components/Simple/Services.vue";

export default {
  name: "Home",
  components: {
    BackgroundContentVue,
    NavbarVue,
    ServicesVue,
  },
};
</script>
