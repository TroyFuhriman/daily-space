<template>
  <div class="home container-fluid bg-light">
    <div class="row">
      <div class="col-12 text-center">
        <button @click="searchApi" class="btn btn-success">Daily Nasa Picture</button>
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

export default {
  name: "Home",
  components: {
    SpaceComponent
  },
  methods: {
    searchApi() {
      this.$store.dispatch("searchApi");
    }
  }
};
</script>
