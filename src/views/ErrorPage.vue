<template>
  <div>
    <img
      class="rounded mx-auto d-block h-400"
      style="height: 80vh"
      src="https://c8.alamy.com/comp/2CT6EK1/404-error-page-not-found-design-with-tow-truck-on-white-background-webpage-banner-search-result-message-vector-illustration-2CT6EK1.jpg"
    />
    <button type="button" class="btn btn-primary my-1" @click="backToHome">
      Return To Home Page
    </button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    backToHome() {
      return this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
