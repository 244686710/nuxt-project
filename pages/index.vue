<template>
  <div>
    <p>Hello World</p>
    <button @click="increment">{{ btnTxt }}</button>
    <p>{{ counter }}</p>
    <nuxt-link to="/about">about</nuxt-link>
    <p><nuxt-link to="/posts">Blog</nuxt-link></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      btnTxt: '点我试试',
      title: 'Hello world'
    }
  },
  fatch ({ store }) {
    store.commit('increment')
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>
