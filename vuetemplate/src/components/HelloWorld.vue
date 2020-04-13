<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="cc"></div>
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$fetch.getUser();
    this.$fetch.login({ name: "xxx" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.cc {
  background: @theme;
  width: 375px;
  height: 200px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
