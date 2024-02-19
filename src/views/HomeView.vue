<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-2"><sidebar @filterData="filterData" /></div>
        <div class="col-10">
          <cars :cars="cars" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Cars from "@/components/cars/cars.vue";
import { fetchCars, fetchFilterCars } from "@/services/apis/cars";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { Sidebar, Cars },
  data() {
    return {
      cars: [],
    };
  },
  mounted() {
    this.fetchCars();
  },
  methods: {
    async fetchCars() {
      try {
        this.cars = await fetchCars();

        // Use the fetchCars function from the service
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    },
    async filterData(wordFilter) {
      try {
        this.cars = await fetchFilterCars(wordFilter);
        // Use the fetchCars function from the service
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    },
  },
};
</script>
