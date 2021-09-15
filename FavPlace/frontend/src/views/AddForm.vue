<template>
  <div class="addPlace">
    <form @submit.prevent="addForm" class="form" data-test="addForm">
      <div>
        <input
          class="form__input input--add"
          v-model="dataPlace.namePlace"
          type="text"
          placeholder="Nombre lugar"
        />
        <select
          v-model="dataPlace.category"
          class="select__option select--option-add"
        >
          <option value="" selected disabled hidden>Categoria</option>
          <option value="parques">Parques</option>
          <option value="restaurante">Restaurantes</option>
          <option value="cc">Centros comerciales</option>
          <option value="otros">otros</option>
        </select>
      </div>

      <div>
        <input
          class="form__input input--add"
          v-model="dataPlace.country"
          type="text"
          placeholder="Pais"
        />
        <input
          class="form__input"
          v-model="dataPlace.city"
          type="text"
          placeholder="Ciudad"
        />

        <span class="focus"></span>
      </div>
      <div>
        <input
          required
          class="form__input input--add"
          v-model="dataPlace.street"
          type="text"
          placeholder="Calle"
        />
        <input
          required
          class="form__input"
          v-model="dataPlace.number"
          type="text"
          placeholder="Numero"
        />

        <span class="focus"></span>
      </div>
      <textarea
        class="comment"
        name="description"
        v-model="dataPlace.comment"
        placeholder="Comentario"
      >
      </textarea>

      <input
        class="input--select-image"
        required
        type="file"
        accept=".png, .jpg, .jpeg"
        name="image"
        id="file"
        @change="updatePhoto"
        data-test="pushPhoto"
      />
      <label for="file">subir foto</label>

      <button class="form-submit" type="submit">Crear</button>
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
      };
      reader.readAsDataURL(file);
    },

    addForm() {
      this.addPlace({
        dataPlace: this.dataPlace,
        userId: this.user._id,
      });
      this.$router.push("/");
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
        street: "",
        number: "",
      },
    };
  },
});
</script>

<style>
.addPlace {
  margin: 15vh auto;
  max-width: 980px;
}
.input--add {
  margin-right: 10px;
}
.select--option-add {
  border-radius: 6px;
  margin-bottom: 5vh;
  background-color: white;
  min-width: 11vw;
  min-height: 7vh;
  max-width: 15vw;
}

.comment {
  border: 1px solid;
  width: 22vw;
  height: 10vh;
}

.input--select-image {
  display: none;
}

.input--select-image + label {
  color: #683000;
  padding: 10px;
  border-radius: 30px;
  background-color: #f1d1af;
  border: none;
  margin: 2vh 0 2vh 0;
}
</style>