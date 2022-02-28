<template>
  <div class="carrousel-item" v-show="currentSlide === index">
    <img class="img-item" :src="slide" alt="">
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselItem",
  props: ["slide","currentSlide","index"],
});
</script>


<style>
.carrousel-item{
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
}
.img-item{
width: 100%;
}
</style>