<template>
  <div>
    <el-input></el-input>
    <el-row>
      <el-col :span="12">
        <el-button type="primary">element Btn</el-button>
      </el-col>
    </el-row>
    <h3>Hello World</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse voluptatum libero sapiente debitis minima molestiae cum perferendis quas sunt. Maiores, nam eius distinctio quibusdam iusto saepe qui nemo reprehenderit!</p>
    <button @click="increment">{{ btnTxt }}</button>
    <p>{{ counter }}</p>
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
