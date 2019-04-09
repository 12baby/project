<template>
  <div class="home">
    我是home路由
    <HelloWorld msg="我是yin组件" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
