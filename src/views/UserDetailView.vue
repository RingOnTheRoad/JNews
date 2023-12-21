<script setup>
 import Navigate from '../components/Navigate.vue'
 import ECharts from '../components/ECharts.vue'
 import ShowUserDetail from '../components/ShowUserDetail.vue'
</script>

<template>
 <div class="main">
    <Navigate></Navigate>
    <ShowUserDetail class="detail"></ShowUserDetail>
    <ECharts class="echarts"></ECharts>
 </div>
</template>



<style scoped>
 .main{
   width: 100%;
   height: 100%;
 }
 .detail{
    position: relative;
    right: 13%;
    bottom: 2%;
 }
 .echarts{
    position: relative;
    bottom: 130%;
    left: 7%;
 }
</style>