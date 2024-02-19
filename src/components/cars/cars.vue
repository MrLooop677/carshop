<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="car in cars" :key="car?.id">
      <img
        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
        :alt="car?.make"
      />
      <h3 class="center">{{ car?.make }}</h3>
      <div class="float-start">
        <button type="button" class="btn btn-light">{{ car?.price }}</button>
      </div>
      <div class="float-end">
        <router-link :to="`/cardetails/${car?.make}/${car?.id}`">
          <button type="button" class="btn btn-primary">More Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarsComponent",
  props: {
    cars: [],
  },
};
</script>

<style lang="scss" scoped>
@import "./cars.style.scss";
</style>
