<template>
  <div>
    <form @submit.prevent="addForm">
      <input
        v-model="dataPlace.namePlace"
        type="text"
        placeholder="Nombre lugar"
      />
      <input v-model="dataPlace.country" type="text" placeholder="Pais" />
      <input v-model="dataPlace.city" type="text" placeholder="Ciudad" />
      <div class="select">
        <select v-model="dataPlace.category" id="standard-select">
          <option value="" selected disabled hidden>Categoria</option>
          <option value="parques">Parques</option>
          <option value="restaurante">Restaurantes</option>
          <option value="cc">Centros comerciales</option>
          <option value="otros">otros</option>
        </select>
        <span class="focus"></span>
      </div>
      <input v-model="dataPlace.score" type="text" placeholder="Valoracion" />
      <textarea
        name="description"
        v-model="dataPlace.comment"
        placeholder="Comentario"
      >
      </textarea>

      <input
        required
        type="file"
        accept="image/*"
        name="image"
        id="file"
        multiple
        @change="updatePhoto"
      />

      <input class="form-submit" type="submit" value="crear" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default defineComponent({
  name: "AddForm",
  computed: {
    ...mapState(["user", "refreshToken"]),
  },

  methods: {
    ...mapActions(["addPlace"]),

    updatePhoto(files: any) {
      const file = files.target.files[0];
      const reader = new FileReader();

      let rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        this.dataPlace.images = rawImg;
        console.log(this.images);
      };
      reader.readAsDataURL(file);
    },

    addForm() {
      this.addPlace({
        dataPlace: this.dataPlace,
        userId: this.user._id,
      });
      console.log("holaaa", this.dataPlace);
    },
  },

  data(): any {
    return {
      dataPlace: {
        namePlace: "",
        country: "",
        city: "",
        category: "",
        score: "",
        comment: "",
        images: "",
      },
    };
  },
});
</script>

<style>
</style>