<template>
    <!-- movie-details-area -->
    <section class="movie-details-area movie-details-bg">
      <div class="container" v-if="movie?.id">
        <div class="row align-items-center position-relative">
          <div class="col-xl-3 col-lg-4">
            <div class="movie-details-img">
              <img :src="movie?.poster ?? '/assets/images/poster/empty.png'" alt="" width="300" height="445">
              <a :href="movie?.url" target="_blank" class="popup-video"><img src="/assets/images/extras/play_icon.png" alt=""></a>
            </div>
          </div>
          <div class="col-xl-6 col-lg-8">
            <div class="movie-details-content">
              <h2>{{ movie?.title }}</h2>
              <div class="banner-meta">
                <ul>
                  <li class="quality">
                    <span v-if="movie?.rated">{{ movie?.rated }}</span>
                    <span>hd</span>
                  </li>
                  <li class="category">
                    <a v-for="(item, index) in movie?.country" :key="index" href="#">
                      {{ item }}<span v-if="index + 1 !== movie?.country?.length">, </span>
                    </a>
                  </li>
                  <li class="release-time">
                    <span v-if="movie?.year"><i class="far fa-calendar-alt"></i> {{ movie?.year }}</span>
                    <span v-if="movie?.duration"><i class="far fa-clock"></i> {{ movie?.duration }}</span>
                  </li>
                </ul>
              </div>
              <p v-if="movie?.actors">
                Actors:
                <span class="sub-title" v-for="(item, index) in movie?.actors" :key="index">
                  {{ item }}<span v-if="index + 1 !== movie?.actors?.length">, </span>
                </span>
              </p>
              <p v-if="movie?.languages">
                Languages:
                <span class="sub-title" v-for="(item, index) in movie?.languages" :key="index">
                  {{ item }}<span v-if="index + 1 !== movie?.languages?.length">, </span>
                </span>
              </p>
              <div class="movie-details-prime">
                <ul>
                  <li class="share"><i class="fas fa-star"></i> Rate</li>
                  <li class="streaming">
                    <template v-for="(star, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">
                      <i class="fas fa-star clickable" :style="movie?.rate && star <= parseInt(movie?.rate, 10) ? 'color: #e4d804;': ''" @click="rate(movie?.id, star)"></i>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- movie-details-area-end -->
</template>

<script>
import RateService from "@/services/api/RateService";

export default {
  name: "MovieDetailsArea",
  props: ['movie'],
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async rate(movieId, star) {
      this.loading = true;
      let query = (new RateService()).store({
        movie_id: movieId,
        rate: star
      });
      let {data: resp} = await query;
      window.Swal.fire({
        title: resp?.message ?? 'Başarılı !',
        text: resp?.text ?? 'İşlem başarılı bir şekilde gerçekleştirildi!',
        showConfirmButton: false,
        timer: 3000,
        icon: "success",
        position: 'top-end',
      });
      this.loading = false;
    },
  }
}
</script>

<style scoped>
  .sub-title {
    line-height: 1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    position: relative;
    margin-bottom: 12px;
    letter-spacing: 1px;
    color: #e4d804;
  }
  .clickable {
    cursor: pointer;
  }
</style>
