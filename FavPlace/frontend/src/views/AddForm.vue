<template>
  <div>
    <form @submit.prevent="Add">
      <input v-model="namePlace" type="text" placeholder="Nombre lugar" />
      <input v-model="country" type="text" placeholder="Pais" />
      <input v-model="city" type="text" placeholder="Ciudad" />
      <div class="select">
        <select v-model="category" id="standard-select">
          <option value="" selected disabled hidden>Categoria</option>
          <option value="parques">Parques</option>
          <option value="restaurante">Restaurantes</option>
          <option value="cc">Centros comerciales</option>
          <option value="otros">otros</option>
        </select>
        <span class="focus"></span>
      </div>
      <input v-model="score" type="text" placeholder="Valoracion" />
      <textarea name="description" v-model="description"> </textarea>

      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        multiple
        @change="updatePhoto"
      />

      <input class="form-submit" type="submit" value="crear" />
    </form>
    <img src="" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "AddForm",

  methods: {
    ...mapActions(["addPlace"]),

    updatePhoto(files: any) {
      const file = files.target.files[0];
      const reader = new FileReader();

      let rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        this.images = rawImg;
      };
      reader.readAsDataURL(file);
    },

    Add() {
      this.addPlace(this.dataPLace);
      alert("has añadido");
    },
  },

  data(): any {
    return {
      dataPLace: {
        namePlace: "",
        country: "",
        city: "",
        category: "",
        score: "",
        description: "",
        images: "",
      },
    };
  },
});
</script>

<style>
</style>