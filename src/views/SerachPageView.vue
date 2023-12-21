<script setup>
 import Navigate from '../components/Navigate.vue'
 import Carousel from '../components/Carousel.vue'
 import NewsCard from '../components/NewsCard.vue'
 import { useNewsContentStore } from '../stores/newsContent.js';
 import { useSearchTempStore } from '../stores/serachTemp.js';

 const newsContentStore = useNewsContentStore()
 const searchTempStore = useSearchTempStore()
 const keyword = searchTempStore.getKeyword()
 const newsList = newsContentStore.getByTitle(keyword)
</script>

<template>
 <div class="main">
   <text class="title">嘉闻</text>
   <Navigate></Navigate>
   <div class="search">
      <el-input v-model="input_search" placeholder="搜索发现" />
      <el-button type="primary" @click="search" tag="a" target="_blank" href="/serachPage">搜索</el-button>
   </div>
   <div class="recText1">
      <text><a href="#" style="color: blue;">工信部等十四部门：开展网络安全技术应用试点示范工作</a></text>
   </div>
   <div class="recText2">
      <text><a href="#" style="color: blue;">凤凰传奇告诉我们，最高端的商战往往以最朴素的方式出现</a></text>
   </div>
   <Carousel class="carouselCSS"></Carousel>
   <div class="mainCard">
      <NewsCard class="card" v-for="(item,index) in newsList"
       :key="item" :title="item.title" :views="item.views" :flag="false"></NewsCard>
   </div>
 </div>
</template>

<style scope>
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
   bottom: 45%;
   right: 50%;
   padding: 10px;
 }
 .recText1{
   position: relative;
   bottom: 52%;
   right: 15%;
 }
 .recText2{
   position: relative;
   bottom: 55.5%;
   left: 15%;
 }
 .carouselCSS{
  position: relative;
  bottom: 50%;
  right: 50%;
 }
 .mainCard{
  position: relative;
  bottom: 50%;
  right: 50%;
  overflow: scroll;
  height: 45%;
 }
 .card{
  width: 100%;
  height: 20%;
  position: relative;
  margin-block: 10px;
 }
</style>