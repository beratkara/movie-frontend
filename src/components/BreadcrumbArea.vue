<template>
  <!-- breadcrumb-area -->
  <section class="breadcrumb-area breadcrumb-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-content">
            <h2 class="title">What to <span>Watch</span></h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page" v-if="page">{{ page }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb-area-end -->
</template>

<script>
export default {
  name: "BreadcrumbArea",
  props: ['page'],
}
</script>

<style scoped>

</style>
