<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{ name: 'posts-id', params: {id: post.id}}">
          {{post.title}}
        </nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ req, params }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return { posts: res.data.slice(0, 5) }
  },

  head: {
    title: 'List of posts'
  }

}
</script>

