<template>
  <footer>
    <div class="footer-top-wrap">
      <div class="container">
        <div class="footer-menu-wrap">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="footer-logo">
                <router-link :to="{ name: 'movie.home' }"><img src="/assets/images/logo/logo.png" alt="" width="100"></router-link>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="footer-menu">
                <nav>
                  <ul class="navigation">
                    <li><router-link :to="{ name: 'movie.home' }">Home</router-link></li>
                    <li><a href="https://www.imdb.com/chart/top" target="_blank">Top 250 Movies</a></li>
                    <li><a href="https://www.imdb.com/chart/boxoffice" target="_blank">Box Office</a></li>
                    <li><a href="https://www.imdb.com/chart/top-english-movies" target="_blank">Top Rated English Movies</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-quick-link-wrap">
          <div class="row align-items-center">
            <div class="col-md-7">
              <div class="quick-link-list">
                <ul>
                  <li><a href="https://help.imdb.com/article/imdb/track-movies-tv/lists-faq/GNQMN47VZSE7KW38" target="_blank">FAQ</a></li>
                  <li><a href="https://help.imdb.com/imdb" target="_blank">Help Center</a></li>
                  <li><a href="https://www.imdb.com/privacy" target="_blank">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-5">
              <div class="footer-social">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="copyright-text">
              <p>Copyright © 2022. <a href="https://www.linkedin.com/in/beratkara" target="_blank">Berat Kara</a></p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterLayout"
}
</script>

<style scoped>

</style>
