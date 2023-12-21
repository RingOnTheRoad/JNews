<script setup>
 import EssayEditItem from '../components/EssayEditItem.vue';
</script>



<template>
 <div class="mainEssayEdit">
    <div class="item">
         <EssayEditItem></EssayEditItem>
    </div>
    <div class="copyRight">
         <CopyRight></CopyRight>
    </div>
 </div>
</template>



<style>
 .mainEssayEdit{
   display: flex;
   position: fixed;
   overflow: hidden;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background: linear-gradient(
      135deg,
      hsl(243, 64%, 71%),
      hsl(190, 33%, 44%),
      hsl(250deg,80%,70%),
      hsl(320deg,80%,70%));
    background-size: 200% 200%;
    animation: myanimation 20s infinite;
 }
 .item{
   position: absolute;
   bottom: 10%;
   left: 21%;
  }
 @keyframes myanimation{
    0%{
        background-position: 0% 0%;
    }
    50%{
        background-position: 100% 100%;
    }
    100%{
        background-position: 0% 0%;
    }
  }
</style>