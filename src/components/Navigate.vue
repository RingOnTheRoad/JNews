<script setup>
import { ref } from 'vue';

const activeIndex = ref('1')
</script>

<template>
 <div class="main">
    <el-menu 
    router
    :default-active="$route.path"
    mode="horizontal">
      <el-menu-item index="/index">主页</el-menu-item>
      <el-menu-item index="/finEcon">财经</el-menu-item>
      <el-menu-item index="/ent">娱乐</el-menu-item>
      <el-menu-item index="4">体育</el-menu-item>
      <el-menu-item index="5">科技</el-menu-item>
      <el-menu-item index="6">教育</el-menu-item>
      <el-menu-item index="7">旅游</el-menu-item>
      <el-sub-menu index="8">
        <template #title>个人中心</template>
        <el-menu-item index="/userDetail">个人信息</el-menu-item>
        <el-menu-item index="/essayList">文章信息</el-menu-item>
        <el-menu-item index="/essayEdit">发布文章</el-menu-item>
      </el-sub-menu>
    </el-menu>
 </div>
</template>

<style scoped>
 .main{
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
 }
 .el-menu{
    flex: 1;
    justify-content: center;
 }
 .el-menu-item{
    width: 25vh;
 }

</style>

<style>
 .el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
  width: 0px !important;
 }
</style>