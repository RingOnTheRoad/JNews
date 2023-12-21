<script setup>
  import cover from '../assets/imgs/嘉闻logo.png'
  import { useEditTempStore } from '../stores/editTemp.js'
  const news = {
    imageUrl: cover,
    title: 'News Title',
    views: 100,
  }
  const props = defineProps({
    title: String,
    views: Number,
    content: String,
    id: Number,
    flag: Boolean
  })
  const editTemp = useEditTempStore()
  var router_url = "/essay/" + props.id
  function onEdit() {
    editTemp.setTitle(props.title, true)
    editTemp.setContent(props.content, true)
  }
</script>

<template>
    <div class="main">
        <img class="news-image" :src="cover">
        <div class="news-content">
          <a class="news-title" :href="router_url">{{ props.title }}</a>
          <span class="news-views">{{ props.views }} 浏览量</span>
          <el-button type="success" @click="onEdit()" 
          href="/essayEdit" target="_blank" tag="a" v-if="props.flag"
          >编辑文章</el-button>
        </div>
    </div>
</template>

<style scoped>
  .main {
    display: flex;
    width: 100%;
    gap: 10px;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .news-image {
    position: relative;
    width: 80px;
    height: 80px;
    bottom: 55%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 5px 1px 4px rgba(0, 0, 0, 0.1);
  }
  .el-button{
    position: absolute;
    bottom: 30%;
    right: 5%;
  }
  .news-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .news-title {
    margin: 0;
    font-size: 16px;
    color: black;
  }
  .news-title:hover {
    background-color: #f5f5f5;
  }
  
  .news-views {
    font-size: 12px;
    color: gray;
  }
  </style>
  