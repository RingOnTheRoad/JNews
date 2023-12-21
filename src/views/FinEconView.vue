<script setup>
 import { ref } from 'vue';
 import Navigate from '../components/Navigate.vue'
 import NewsCard from '../components/NewsCard.vue'
 import { useNewsContentStore } from '../stores/newsContent';

   const input_search = ref('')
   const newsContentStore = useNewsContentStore()
   const newsList = newsContentStore.getList(true,'财经')
   function search() {
    searchTempStore.saveKeyword(input_search._value)
   }

</script>

<template>
 <div class="main">
    <Navigate></Navigate>
    <div class="search">
      <el-input v-model="input" placeholder="搜索发现" />
      <el-button type="primary" @click="search" tag="a" target="_blank" href="/serachPage">搜索</el-button>
    </div>
    <div class="recText1">
      <text><a href="/essay/1" style="color: blue;">工信部等十四部门：开展网络安全技术应用试点示范工作</a></text>
   </div>
   <div class="recText2">
      <text><a href="/essay/3" style="color: blue;">凤凰传奇告诉我们，最高端的商战往往以最朴素的方式出现</a></text>
   </div>
    <div class="mainCard">
        <NewsCard class="card" v-for="(item,index) in newsList"
        :key="item" :title="item.title" :views="item.views" :flag="flase" :id='item.id'></NewsCard>
    </div>
 </div>
</template>



<style scoped>
 .main{
   width: 100%;
   height: 100%;
   position: fixed;
 }
 .el-menu{
   width: 100vh;
 }
 .el-input{
   width: 300px;
   padding: 10px;
 }
 .title{
   position: relative;
   bottom: 43%;
   right: 68%;
   white-space: nowrap;
   color: black;
   font-size: 50px;
   font-weight: 700;
   letter-spacing: 2px;
   text-shadow: 0 0 4px grey;
   background-color: #F5F5F5;
   padding-inline: 1000px;
 }
 .search{
   position: relative;
   bottom: 42%;
   right: 50%;
   padding: 10px;
 }
 .recText1{
   position: relative;
   bottom: 49%;
   right: 15%;
 }
 .recText2{
   position: relative;
   bottom: 52.5%;
   left: 15%;
 }

 .mainCard{
  position: relative;
  bottom: 48%;
  right: 50%;
  overflow: scroll;
  height: 80%;
 }
 .card{
  width: 100%;
  height: 10%;
  position: relative;
  margin-block: 15px;
 }
</style>