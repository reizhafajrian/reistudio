<template>
  <div>
    <h1 class="text-black text-center text-lg font-bold">Our Services</h1>
    <p class="text-center mt-4 font-light">
      Creating a software with a good design and high performance that our
      service
    </p>
    <div class="flex-row flex justify-around mt-6">
      <CardServices
        title="Web Development"
        description="The website is simple and a good performance but effective. We do our best and fulfill our client's requirements"
      />
      <CardServices
        title="Mobile App Development"
        description="The development of iOS and Android apps are easy to use to help develop the company's business to the fullest"
      />
      <CardServices
        title="Website App Development"
        description="We develop complex web applications with effective technology"
      />
    </div>
  </div>
</template>

<script>
import CardServices from "../Complexs/CardServices.vue";
export default {
  name: "Services",
  components: {
    CardServices,
  },
};
</script>

<style>
</style>