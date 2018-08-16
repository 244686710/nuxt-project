<template>
  <div class="container">
    <h1>Blog</h1>
    <ol>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ name: 'posts-id', params: {id: post.id}}">
          {{post.title}}
        </nuxt-link>
      </li>
    </ol>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ req, params }) {
    const res = await axios.get('/api/posts')
    return { posts: res.data }
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getList () {
      const res = await axios.get('/api/posts')
      this.posts = res.data
    }
  },
  // mounted () {
  //   this.getList()
  // },

  head: {
    title: 'List of posts'
  }

}
</script>

