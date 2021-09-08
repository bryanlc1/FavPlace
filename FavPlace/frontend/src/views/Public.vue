<template>
  <div>
    <h1>{{ publicProfile.name }}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Public",
  computed: {
    ...mapState(["publicProfile"]),
  },
  methods: {
    ...mapActions(["fetchPublic"]),
  },
  mounted() {
    const route = useRoute();
    const { publicId } = route.params;
    this.fetchPublic(publicId);
  },
});
</script>

<style>
</style>