<template>
   <button class="carousel-control left"  @click="$emit('prev')">Prev</button>
    <button class="carousel-control rigth" @click="$emit('next')">Next</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    
   emits:['prev','next']
});
</script>

<style>
.carousel-control{
    position: absolute;
    top: 50%;
}

.left{
    left: 0;
}

.rigth{
 right: 0;
}
</style>