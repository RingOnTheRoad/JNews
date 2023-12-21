<script setup>
 import LoginItem from '../components/LoginItem.vue';
 import CopyRight from '../components/CopyRight.vue';
</script>

<template>
   <div class="wrapper">
      <div class="item">
         <LoginItem></LoginItem>
      </div>
      <div class="copyRight">
         <CopyRight></CopyRight>
      </div>
   </div>
   
</template>

<style>
   .copyRight{
      position: absolute;
      bottom: 0%;
      left: 36%;
   }
</style>