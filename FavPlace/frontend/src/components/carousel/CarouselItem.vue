<template>
  <div class="carousel__item">
    <router-link to="/detail">
      <img class="card__image" :src="slide" alt="" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselItem",
  props: ["slide"],
});
</script>


<style>
.card__image {
  width: 100%;
}
</style>