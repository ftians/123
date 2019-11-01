<template>
  <div>
    <Header />
    <div class="main">
        <ul class="main-nav">
          <router-link to="/home/chengshi" tag="li">⊙北京</router-link>
          <router-link to="/home/zzshangying" tag="li">正在热映</router-link>
          <router-link to="/home/jjshangying" tag="li">即将上映</router-link>
          <router-link to="/home/sousuo" tag="li">搜索</router-link>
        </ul>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  components: {
    Header,
    TabBar
  }
};
</script>

<style scoped>
  .main .main-nav{display: flex;width: 100%;list-style: none;}
  .main .main-nav li{width: 25%;height: 35px;line-height: 35px;text-align: center;}
   .main .main-nav li.router-link-active{border-bottom:2px solid crimson}
</style>
