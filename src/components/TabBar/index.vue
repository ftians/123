<template>
    <div id="nav">
      <router-link tag="div" to="/home">首页</router-link>
      <router-link tag="div" to="/movie">影院</router-link>
      <router-link tag="div" to="/login">我的</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
  #nav{height: 50px;width: 100%;background: #eee;display: flex;position: absolute;bottom: 0;}
  #nav div{width: 33.333%;text-align: center;height: 50px;line-height: 50px;}
 #nav div.router-link-active{color: crimson}
</style>