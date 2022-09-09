<template>
  <section class="search-area search-bg">
    <div class="container">
      <div class="search-inner-wrap">
        <div class="row align-items-center">
          <div class="col-12">
            <form class="search-form" @submit.prevent="search">
              <input type="text" v-model="keyword" minlength="3" required placeholder="Type the name of the movie to search">
              <button class="btn">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchArea",
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    search() {
      if (this.keyword.length < 3) {
        return;
      }
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style scoped>

</style>
