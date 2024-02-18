<template>
  <div>
    <ul class="d-flex justify-content-center align-items-center">
      <!-- Iterate over navbarLinks and reference each item as link -->
      <li v-for="link in navbarLinks" :key="link">
        <router-link
          :to="{
            path: link === 'Home' ? '/' : link,
          }"
        >
          <a>{{ link }}</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import "./_navbar.style.scss";
export default {
  name: "NavBar",
  data: function () {
    return {
      navbarLinks: ["Home", "About", "Categories", "Contact"],
    };
  },
};
</script>

<style></style>
