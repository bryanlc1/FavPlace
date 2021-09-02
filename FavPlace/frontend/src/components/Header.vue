<template>
  <div class="header">
    <router-link to="/"> <h1>This is header</h1></router-link>

    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
.header {
  background-color: #066f68;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}
</style>