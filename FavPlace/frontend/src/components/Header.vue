<template>
  <div class="header">
    <router-link to="/" class="link"> <h1>FavPlace</h1></router-link>
    <router-link to="/profile">User</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
@import "../styles/global.scss";

.header {
  background-color: #066f68;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}
</style>