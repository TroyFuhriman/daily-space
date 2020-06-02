<template>
  <div class="spaceComponent col-md-6 col-12 text-center">
    <div class="card shadow border border-dark">
      <img class="card-img-top" :src="space.hdurl" alt />
      <div class="card-body">
        <h4 class="card-title">{{space.title}}</h4>
        <p class="card-text">{{space.explanation}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spaceComponent",

  data() {
    return {};
  },
  computed: {
    space() {
      return this.$store.state.space;
    }
  }
};
</script>

<style>
</style>