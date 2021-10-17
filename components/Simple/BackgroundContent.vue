<template>
  <div>
    <div class="container-lg cont">
      <div class="container">
        <h1 class="h1 text-white mt-3">
          Website, Web App, Mobile App Development Agency
        </h1>
        <p class="text-white text mt-3">
          We build and maintain software to help your business, so what are you
          waiting for?
        </p>
        <Button />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped >
.cont {
  width: 100%;
  height: 100vh;
  background-image: url(~assets/image/img_bg.png);
  background-size: cover;
  background-position: center;
  .container {
    padding: 100px 0px 0px 100px;
    width: 70%;

    .text {
      font-size: 0.8em;
    }
    .h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      text-align: left;
    }
  }
}
</style>
<script>
import Button from "../Simple/Button.vue";
export default {
  name: "BackgroundContent",
  components: {
    Button,
  },
  data() {
    return {
      title: "BackgroundContent",
    };
  },
};
</script>
