<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>我是组件里的内容</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    getData (){

    }
  }
};
</script>
<style scoped lang="less">
@import url("../HelloWorld/less/index.less");
</style>
