<template>
  <div>
    <img
      class="rounded mx-auto d-block h-400"
      style="height: 60vh"
      src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
    />
    <h2>
      {{ carInfo?.make }}
    </h2>
  </div>
</template>

<script>
import { fetchCarInfo } from "@/services/apis/cars";

export default {
  name: "carInfo",
  data() {
    return {
      carInfo: [],
      carId: this.$route.params.carId,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.carInfo = await fetchCarInfo(this.carId);
    },
  },
};
</script>

<style></style>
