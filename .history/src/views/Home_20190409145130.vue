<template>
  <div class="home">
    我是home路由
    <HelloWorld msg="我是引到home里的一个组件" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
