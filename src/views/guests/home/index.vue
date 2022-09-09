<template>
  <main>

    <breadcrumb-area :page="'IMDB'"></breadcrumb-area>
    <search-area @search="search"></search-area>
    <movies-area :movies="movies" ></movies-area>

  </main>
</template>

<script>
import BreadcrumbArea from "@/components/BreadcrumbArea";
import SearchArea from "@/components/SearchArea";
import ImdbService from "@/services/api/ImdbService";
import MoviesArea from "@/components/MoviesArea";

export default {
  name: "MovieIndex",
  components: {MoviesArea, SearchArea, BreadcrumbArea},
  data() {
    return {
      loading: false,
      movies: {}
    }
  },
  methods: {
    async search(keyword) {
      this.loading = true;
      let query = (new ImdbService()).parameter('keyword', keyword).search();
      let {data: resp} = await query;
      this.movies = resp.data;
      this.loading = false;
    },
  }
}
</script>

<style scoped>

</style>
