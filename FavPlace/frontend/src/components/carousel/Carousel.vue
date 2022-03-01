<template>
  <div class="carousel">
      <div class="carrousel-inner">
         <carousel-item v-for="(slide,index) in slides"
          :slide="slide"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :index="index">
         </carousel-item>
         <carousel-controls @prev="prev" @next="next" ></carousel-controls>
      </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import CarouselItem from "./CarouselItem.vue"
import CarouselControls from "./CarouselControls.vue"

export default defineComponent({
    name: "Carousel",
    props:['slides'],
    components:{CarouselItem , CarouselControls},
    data: () =>( {
        currentSlide:0,
        
        
    }),

    methods:{
        setCurrentSlide(index){
            this.currentSlide=index;
            console.log('holaaaaaaaaaaaaaaaaaaaa',this.currentSlide)
        },
        prev(){
            console.log('prev hola',this.currentSlide)
         const index =
        this.currentSlide > 0 ? this.currentSlide -1 : 0;
      this.setCurrentSlide(index);
      console.log('prev adios',this.currentSlide)

        },

        next(){
            console.log('next hola',this.currentSlide)
            const index =
        this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 :  this.currentSlide;
        this.setCurrentSlide(index);
        console.log('next adios',this.currentSlide)
        }
    }
});
</script>
<style>
.carrousel-inner{
    position: relative;
    overflow: hidden;
}


</style>
