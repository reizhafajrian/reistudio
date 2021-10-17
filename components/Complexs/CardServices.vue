<template>
  <div class="wrapper flex items-end">
    <div class="card bg-black m-0 flex justify-center flex flex-shrink">
      <img :class="'img ' + changeMobile" :src="img" alt="" />

      <div class="py-8 px-4 flex justify-around flex-col">
        <div>
          <h1 class="text-white text-base text-center font-bold">
            {{ title }}
          </h1>
          <p class="text-white text-xs font-light mt-6">
            {{ description }}
          </p>
        </div>
        <Button style="width: 30%" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Simple/Button.vue";
export default {
  name: "CardServices",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      default: "Website Development",
    },
    description: {
      type: String,
      default:
        "The website is simple and a good performance but effective. We do our best and fulfill our client's requirements",
    },
  },
  computed: {
    img() {
      switch (this.title) {
        case "Web Development":
          return require("../../assets/image/img_web_dev.png");
        case "Mobile App Development":
          return require("../../assets/image/img_app_dev.png");
        case "Website App Development":
          return require("../../assets/image/img_web_app.png");
      }
    },
    changeMobile() {
      if (this.title === "Mobile App Development") return "mobile";
      else return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 600px;

  .card {
    max-width: 342px;
    height: 300px;
    position: relative;
    border-radius: 50px;
    .img {
      position: absolute;
      top: -125px;
      &.mobile {
        top: -240px;
      }
    }
  }
}
</style>