<script setup>
 import carousel1 from '../assets/imgs/carousel1.png'
 import carousel2 from '../assets/imgs/carousel2.png'
 import carousel3 from '../assets/imgs/carousel3.png'


 const bannerList = [{url: carousel1},{url: carousel2},{url: carousel3},]
</script>



<template>
 <div>
    <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <el-image style="width: 100%; height: 100%;" :src="item.url" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
 </div>
</template>



<style scoped>
</style>