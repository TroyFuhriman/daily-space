<template>
  <div class="home container-fluid">
    <div class="row d-flex">
      <div
        class="col flex-wrap text-center text-shadow bg-primary text-light justify-content-between"
      >
        <h1>
          <i class="fas fa-user-astronaut"></i>
          NAS
          <img class="vue-v mb-2 mr-2" alt="Vue logo" src="../assets/logo.png" /> Picture of the day
          <i class="fas fa-space-shuttle"></i>
        </h1>
      </div>
    </div>
    <div class="row mt-3 justify-content-center">
      <div class="col-md-4 col-12 text-center">
        <div class="form-group">
          <form @submit.prevent="searchSpace" action>
            <input type="date" class="form-control" v-model="query" />
            <button
              type="submit"
              class="mt-3 text-shadow btn btn-outline-secondary text-light btn-success"
            >Search</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <space-component />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceComponent from "@/components/SpaceComponent.vue";
import Footer from "@/components/FooterComponent.vue";

export default {
  name: "Home",
  data() {
    return {
      query: ""
    };
  },
  components: {
    SpaceComponent,
    Footer
  },
  methods: {
    searchApi() {
      this.$store.dispatch("searchApi");
    },
    searchSpace() {
      this.$store.dispatch("searchSpace", this.query);
    }
  },
  mounted() {
    this.searchApi();
  }
};
</script>

<style>
.vue-v {
  height: 1em;
  transform: rotate(180deg);
  margin-left: -0.5rem;
}
.text-shadow {
  text-shadow: 1px 1px black;
}
@media only screen and (max-width: 600px) {
  .hidden {
    display: none;
  }
}
</style>
