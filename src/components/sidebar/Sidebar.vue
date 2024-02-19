<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="/about">
          <a>Honda</a>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <a>Toyota</a>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <a>Ford</a>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <a>Chevrolet</a>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <a>Nissan</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarView",
};
</script>

<style scoped lang="scss">
/* Import navbar styles */
@import "./sidebar.style.scss";
</style>
