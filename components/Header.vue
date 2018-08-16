<template>
  <ul class="nav">
    <li><nuxt-link to="/">Index</nuxt-link></li>
    <li><nuxt-link to="/posts">article</nuxt-link></li>
  </ul>
</template>
<script>
export default {

}
</script>
<style>
  .nav li {
    float: left;
    list-style: none;
    margin-right: 20px;
    line-height: 60px;
    font-size: 16px;
  }
  .nav li a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
</style>

