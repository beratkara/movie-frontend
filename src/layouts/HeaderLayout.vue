<template>
  <!-- header-area -->
  <header>
    <div id="sticky-header" class="menu-area transparent-header">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
            <div class="menu-wrap">
              <nav class="menu-nav show">
                <div class="logo">
                  <router-link :to="{ name: 'movie.home' }">
                    <img src="/assets/images/logo/logo.png" alt="Logo" width="100">
                  </router-link>
                </div>
                <div class="navbar-wrap main-menu d-none d-lg-flex">
                  <ul class="navigation">
                    <li class="active"><router-link :to="{ name: 'movie.home' }">Home</router-link></li>
                    <li><a href="https://www.imdb.com/chart/top" target="_blank">Top 250 Movies</a></li>
                    <li><a href="https://www.imdb.com/chart/boxoffice" target="_blank">Box Office</a></li>
                    <li><a href="https://www.imdb.com/chart/top-english-movies" target="_blank">Top Rated English Movies</a></li>
                  </ul>
                </div>
                <div class="header-action d-none d-md-block">
                  <ul>
                    <li class="header-lang">
                      <form action="#">
                        <div class="icon"><i class="fa-solid fa-globe"></i></div>
                        <select id="lang-dropdown">
                          <option value="" selected="selected">EN</option>
                          <option value="">TR</option>
                        </select>
                      </form>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <!-- Mobile Menu  -->
            <div class="mobile-menu">
              <div class="close-btn"><i class="fas fa-times"></i></div>

              <nav class="menu-box">
                <div class="nav-logo"><a href="https://themebeyond.com/html/movflx/index.html"><img src="/assets/images/logo/logo.png" alt="" title=""></a>
                </div>
                <div class="menu-outer">
                  <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->

                  <ul class="navigation">
                    <li class="menu-item-has-children"><router-link :to="{ name: 'movie.home' }">Home</router-link>
                      <ul class="submenu">
                        <li><a href="https://themebeyond.com/html/movflx/index.html">Home One</a></li>
                        <li><a href="https://themebeyond.com/html/movflx/index-2.html">Home Two</a></li>
                      </ul>
                      <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                    <li class="active menu-item-has-children"><a href="#">Movie</a>
                      <ul class="submenu">
                        <li class="active"><a href="https://themebeyond.com/html/movflx/movie.html">Movie</a></li>
                        <li><a href="https://themebeyond.com/html/movflx/movie-details.html">Movie Details</a></li>
                      </ul>
                      <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                    <li><a href="https://themebeyond.com/html/movflx/tv-show.html">tv show</a></li>
                    <li><a href="https://themebeyond.com/html/movflx/pricing.html">Pricing</a></li>
                    <li class="menu-item-has-children"><a href="#">blog</a>
                      <ul class="submenu">
                        <li><a href="https://themebeyond.com/html/movflx/blog.html">Our Blog</a></li>
                        <li><a href="https://themebeyond.com/html/movflx/blog-details.html">Blog Details</a></li>
                      </ul>
                      <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                    <li><a href="https://themebeyond.com/html/movflx/contact.html">contacts</a></li>
                  </ul>
                </div>
                <div class="social-links">
                  <ul class="clearfix">
                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                    <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="menu-backdrop"></div>
            <!-- End Mobile Menu -->

            <!-- Modal Search -->
            <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <form>
                    <input type="text" placeholder="Search here...">
                    <button><i class="fas fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <!-- Modal Search-end -->

          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header-area-end -->
</template>

<script>
export default {
  name: "HeaderLayout"
}
</script>

<style scoped>

</style>
