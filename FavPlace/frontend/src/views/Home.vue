<template>
  <div class="home">
    <h1>This is home</h1>

    <section>
      <router-link to="/detail">Detail</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
