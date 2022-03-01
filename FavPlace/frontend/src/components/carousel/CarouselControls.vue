<template>
   <button class="carousel-control left"  @click="$emit('prev')"><fa icon="arrow-left" /></button>
    <button class="carousel-control rigth" @click="$emit('next')"><fa icon="arrow-right" /></button>
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
    background-color: rgb(241 209 175 / 60%);
}

.left{
    left: 0;
}

.rigth{
 right: 0;
}
</style>