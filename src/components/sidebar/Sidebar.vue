<template>
  <div class="navbar">
    <ul>
      <li @click="filterByCategory('Honda')">
        <a>Honda</a>
      </li>
      <li @click="filterByCategory('Toyota')">
        <a>Toyota</a>
      </li>
      <li @click="filterByCategory('Ford')">
        <a>Ford</a>
      </li>
      <li @click="filterByCategory('Chevrolet')">
        <a>Chevrolet</a>
      </li>
      <li @click="filterByCategory('Nissan')">
        <a>Nissan</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarView",
  methods: {
    filterByCategory(category) {
      this.$emit("filterData", category);
    },
  },
};
</script>

<style scoped lang="scss">
/* Import navbar styles */
@import "./sidebar.style.scss";
</style>
