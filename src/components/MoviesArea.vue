<template>
  <!-- movie-area -->
  <section class="movie-area movie-bg" v-if="movies?.length">
    <div class="container">
      <div class="row tr-movie-active">

        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer"
             v-for="(item, index) in movies" :key="index">
          <div class="movie-item movie-item-three mb-50">
            <div class="movie-poster">
              <img :src="item?.poster ?? '/assets/images/poster/empty.png'" alt="" width="300" height="430">
              <ul class="overlay-btn">
                <li class="rating" v-if="item?.rate">
                  <template v-for="(item, index) in parseInt(item?.rate, 10)" :key="index">
                    <i class="fas fa-star"></i>
                  </template>
                </li>
                <li><a :href="item.url" target="_blank" class="popup-video btn">IMDB Page</a></li>
                <li><router-link :to="{ name: 'movie.show', params: { id: item.id }}" class="btn">Details</router-link></li>
              </ul>
            </div>
            <div class="movie-content">
              <div class="top">
                <h5 class="title">
                  <router-link :to="{ name: 'movie.show', params: { id: item.id }}">
                    {{ item.title }}
                  </router-link>
                </h5>
                <span class="date">{{ item.year }}</span>
              </div>
              <div class="bottom">
                <ul>
                  <li><span class="quality">hd</span></li>
                  <li>
                    <span class="rating"><i class="fas fa-star"></i> {{ item.rate ? parseInt(item?.rate, 10) : '-' }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
<!--      <div class="row d-grid justify-content-center">-->
<!--        <div class="col-12">-->
<!--          <div class="pagination-wrap mt-30">-->
<!--            <nav>-->
<!--              <ul>-->
<!--                <li class="active"><a href="#">1</a></li>-->
<!--                <li><a href="#">2</a></li>-->
<!--                <li><a href="#">3</a></li>-->
<!--                <li><a href="#">4</a></li>-->
<!--                <li><a href="#">Next</a></li>-->
<!--              </ul>-->
<!--            </nav>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </section>
  <!-- movie-area-end -->
</template>

<script>
export default {
  name: "MoviesArea",
  props: ['movies'],
}
</script>

<style scoped>

</style>
