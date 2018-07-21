<template>
  <div>
    <h1>Hello world</h1>
    <div>hahs</div>
    <p>{{ msg }}</p>
    <button>{{ btnTxt }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facere? Consequuntur non inventore quibusdam? In saepe voluptates perferendis totam ad qui quaerat autem, quidem quasi culpa modi porro obcaecati ullam!",
      btnTxt: "按钮"
    }
  }
}
</script>
