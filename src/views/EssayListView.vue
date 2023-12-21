<script setup>
   import { ref } from 'vue';
   import Navigate from '../components/Navigate.vue'
   import NewsCard from '../components/NewsCard.vue'
   import { useNewsContentStore } from '../stores/newsContent';

   const input_search = ref('')
   const newsContentStore = useNewsContentStore()
   const newsList = newsContentStore.getList(false,'')
   function search() {
    searchTempStore.saveKeyword(input_search._value)
   }

</script>

<template>
 <div class="main">
   <text class="title">嘉闻</text>
   <Navigate></Navigate>
   <div class="search">
      <el-input v-model="input" placeholder="搜索发现" />
      <el-button type="primary" @click="search" tag="a" target="_blank" href="/serachPage">搜索</el-button>
   </div>
   <div class="mainCard">
      <NewsCard class="card" v-for="(item,index) in newsList"
       :key="item" :title="item.title" :views="item.views" :content="item.content" :flag="true">
    </NewsCard>
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
   bottom: 45%;
   right: 50%;
   padding: 10px;
 }
 .mainCard{
  position: relative;
  bottom: 45%;
  right: 50%;
  overflow: scroll;
  height: 50%;
 }
 .card{
  width: 100%;
  height: 20%;
  position: relative;
  margin-block: 10px;
 }
</style>