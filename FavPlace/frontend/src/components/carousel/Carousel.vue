<template>
  <div class="card__carousel">
    <div class="carousel__inner">
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
      >
      </CarouselItem>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CarouselItem from "./CarouselItem.vue";

export default defineComponent({
  props: ["slides"],
  components: { CarouselItem },
});
</script>
<style>
.card__carousel {
  display: flex;
  justify-content: center;
}
</style>
