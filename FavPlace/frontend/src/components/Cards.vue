<template>
  <section class="cards">
    <arcticle class="card">
      <div class="card__header">
        <div class="avatar">
          <img
            class="avatar__image"
            src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          />
        </div>
        <div>
          <p>Bryan</p>
          <p>Spain,Barcelona</p>
        </div>
      </div>
      <div class="card__main">
        <router-link to="/detail">
          <img
            src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/02/07/5fa4371084e80.jpeg"
            alt=""
          />
        </router-link>
      </div>
      <div class="header__footer">
        <span class="title">Rio besos</span>
        <span>
          Me a encantado pasear por este hermoso rio ,<br />
          puedes hacer deporte o simplemente acostarte en el cesped <br />
          a relajarte. Hay varias entradas a lo largo del rio.
        </span>
      </div>
    </arcticle>
    <arcticle class="card">
      <div class="card__header">
        <div class="avatar">
          <img
            class="avatar__image"
            src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          />
        </div>
        <div>
          <p>Bryan</p>
          <p>Spain,Barcelona</p>
        </div>
      </div>
      <div class="card__main">
        <router-link to="/detail">
          <img
            src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/02/07/5fa4371084e80.jpeg"
            alt=""
          />
        </router-link>
      </div>
      <div class="header__footer">
        <span class="title">Rio besos</span>
        <span>
          Me a encantado pasear por este hermoso rio ,<br />
          puedes hacer deporte o simplemente acostarte en el cesped <br />
          a relajarte. Hay varias entradas a lo largo del rio.
        </span>
      </div>
    </arcticle>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cards",
});
</script>

<style scoped>
@import "../styles/global.scss";
.cards {
  display: flex;
  margin: 0px auto;
  flex-direction: column;
  max-width: 935px;
  align-items: center;
}

.card {
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  padding: 1em;
  box-shadow: 0 1px 3px rgb(255 0 120);
}

.card__header {
  display: flex;
}

.avatar {
  border-radius: 50%;
  height: 64px;
  width: 64px;
}

.avatar__image {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.header__footer {
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 0px;
}
</style>
