<template>
  <nav
    class="
      flex
      items-center
      justify-between
      flex-wrap
      bg-teal-500
      p-6
      px-20
      bg-black
    "
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <Icon />
    </div>
    <div class="block lg:hidden">
      <button
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-teal-200
          border-teal-400
          hover:text-white hover:border-white
        "
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow ml-10">
        <nuxt-link
          to="/"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200 text-white
            mr-4
          "
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-teal-200 text-white
            mr-4
          "
        >
          About
        </nuxt-link>
        <nuxt-link
          to="works"
          class="
            block
            mt-4
            mr-4
            lg:inline-block lg:mt-0
            text-teal-200 text-white
          "
        >
          Works
        </nuxt-link>
        <nuxt-link
          to="works"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white"
        >
          Careers
        </nuxt-link>
      </div>
      <div class="flex">
        <nuxt-link
          to="/icon"
          class="
            leading-none
            hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
            ml-3
          "
          ><IconTwitter
        /></nuxt-link>
        <nuxt-link
          to="/icon"
          class="
            leading-none
            hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
            ml-3
          "
          ><IconInstagram
        /></nuxt-link>
        <nuxt-link
          to="/icon"
          class="
            leading-none
            hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
            ml-3
          "
          ><IconLinkedin
        /></nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Icon from "~/assets/icon/icon.svg?inline";
import IconTwitter from "~/assets/icon/ic_twitter.svg?inline";
import IconInstagram from "~/assets/icon/ic_instagram.svg?inline";
import IconLinkedin from "~/assets/icon/ic_linkedin.svg?inline";

export default {
  name: "Navbar",
  components: {
    Icon,
    IconTwitter,
    IconInstagram,
    IconLinkedin,
  },
};
</script>
