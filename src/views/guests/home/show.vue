<template>
  <main>
    <movie-details-area :movie="movie"></movie-details-area>
  </main>
</template>

<script>
import MovieDetailsArea from "@/components/MovieDetailsArea";
import ImdbService from "@/services/api/ImdbService";
export default {
  name: "MovieShow",
  components: {MovieDetailsArea},
  data() {
    return {
      loading: false,
      movie: {}
    }
  },
  methods: {
    async show(id) {
      this.loading = true;
      let query = (new ImdbService()).show(id);
      let {data: resp} = await query;
      this.movie = resp.data;
      this.loading = false;
    },
  },
  beforeMount() {
    this.show(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
