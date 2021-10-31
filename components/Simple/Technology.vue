<template>
  <div class="flex flex-col mt-20">
    <div class="flex flex-col mb-10">
      <h1 class="h1 text-2xl self-center">The technology</h1>
      <h6 class="self-center">
        The technology we choose is the best to support your business
      </h6>
    </div>
    <div class="container-lg cont flex items-center justify-center">
      <carousel class="w-full" :per-page="4" :navigationEnabled="true">
        <slide
          v-for="(item, key) in icon"
          :data-index="key"
          :data-name="item"
          :key="key"
          class="flex justify-center"
        >
          <circle-card><div :is="item"></div></circle-card>
        </slide>

        <!-- <slide>
          <circle-card><div :is="icon[0]"></div></circle-card>
        </slide>
        <slide>
          <circle-card><div :is="icon[0]"></div></circle-card>
        </slide>
        <slide>
          <circle-card><div :is="icon[0]"></div></circle-card>
        </slide>
        <slide>
          <circle-card><div :is="icon[2]"></div></circle-card>
        </slide> -->
      </carousel>
    </div>
  </div>
</template>

<script>
import CircleCard from "../Complexs/CircleCard.vue";
import IconVue from "~/assets/icon/ic_vue.svg?inline";
import IconReact from "~/assets/icon/ic_react.svg?inline";
import IconFlutter from "~/assets/icon/ic_flutter.svg?inline";
import IconNodeJs from "~/assets/icon/ic_node_js.svg?inline";

export default {
  components: { CircleCard },
  name: "Technology",

  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
      },
      {
        title: "Slide #1",
        content:
          '<img :src="require("../assets/image/img_app_dev.png")" alt="" srcset="">',
      },
      {
        title: "Slide #1",
        content: "Slide content.",
      },
    ],
    icon: [IconVue, IconReact, IconFlutter, IconNodeJs, IconNodeJs],
  }),
};
</script>

<style scoped lang="scss">
.cont {
  width: 100%;
  height: 120vh;
  background-image: url(~assets/image/bg_tech.png);
  background-size: cover;
  background-position: center;
}
</style>