<template>
  <div class="carousel">
      <div class="carrousel-inner">
         <carousel-item v-for="(slide,index) in slides"
          :slide="slide"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :index="index">
         </carousel-item>
      </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CarouselItem from "./CarouselItem.vue"

export default defineComponent({
    name: "Carousel",
    props:['slides'],
    components:{CarouselItem},
    data: () =>( {
        currentSlide:0
    })
});
</script>
<style>
.carrousel-inner{
    position: relative;
    overflow: hidden;
}


</style>
