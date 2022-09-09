<template>
  <header-layout></header-layout>
    <router-view></router-view>
  <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from "@/layouts/HeaderLayout";
import FooterLayout from "@/layouts/FooterLayout";
export default {
  name: "MovieLayout",
  components: {FooterLayout, HeaderLayout},
}
</script>

<style scoped>

</style>
