<script setup>
  import { useNewsContentStore } from '../stores/newsContent.js'
  import { useCommentStore } from '../stores/comments.js'
  import { ref } from 'vue';

  const currId = window.location.href.split('/essay/')[1]
  const newsContentStore = useNewsContentStore()
  const commentStore = useCommentStore()
  const eassy = newsContentStore.getEassyById(currId)
  const comments_input = ref('')
  const comments = ref(eassy.comments)

  function addComment() {
    comments.value.push({name: '您的用户名',content: comments_input.value, like:'99', dislike: '7'})
    console.log(comments.value)
  }
    
</script>

<template>
  <div class="article">
    
    <h1>{{ eassy.title }}</h1>
    <hr>
    <div class="content">
      {{ eassy.content }}
    </div>

    <div class="operate" style="justify-content:center;position: relative;right: 7%;margin-top: 50px;">
      <el-row style="width: 100%;">
        <el-col :span="5">
          <el-statistic title="点赞数" :value="commentStore.upvotes" @click="commentStore.upvote"/>
        </el-col>
        <el-col :span="5">
          <el-statistic title="点踩数" :value="commentStore.downvotes" @click="commentStore.downvote"/>
        </el-col>
        <el-col :span="5">
          <el-statistic title="是否已收藏" :value="commentStore.favorite ? '取消收藏' : '已收藏'" @click="commentStore.toggleFavorite"/>
        </el-col>
        <el-col :span="5">
          <el-statistic title="评论数" :value="eassy.comments.length"/>
        </el-col>
      </el-row>
    </div>

    <div>
      <br><br>
      <h2>评论区</h2>
      <div class="container">
        <img src="../assets/imgs/嘉闻logo.png" class="userimage">
        <el-input v-model="comments_input" placeholder="请输入评论"
          class="input" />
      </div>

      <div>
        <el-button @click="addComment()" style="
        width: 80px;position: relative;bottom: 52px;left: 365px;box-shadow: none;
        ">评论</el-button>
      </div>
      <div class="comment-section">
        <div v-if="eassy.comments.length === 0">
          暂无评论
        </div>
        <ul>
          <li v-for="(comment, index) in comments" :key="comment.name">
            <div class="comment-list">
              <div class="container">
                <img src="../assets/imgs/嘉闻logo.png" class="userimage">
                <h2 style="font-size: 20px;">{{ comment.name }}</h2>
              </div>
              <p class="list-text">{{ comment.content }}</p>
              <div class="operate">
                <el-button aria-live="polite" type="button" @click="comment.like++"
                style="position: relative;right: 24%;width: 100px;margin-bottom: 10px;">
                  {{  '点赞' }} ({{ comment.like }})
                </el-button>
                <el-button aria-live="polite" type="button" @click="comment.dislike++"
                style="position: relative;right: 24%;width: 100px;">
                  {{  '点踩' }} ({{ comment.dislike }})
                </el-button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<style scoped>
.back-button {
  z-index: 1000;
  top: auto;
  left: auto;
}

.el-col {
  text-align: center;
  margin-right: auto;
}

.list-text {
  padding: 10px;
}

.article {
  margin: 0 auto;
  width: 80%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 0px;
}
.comment-list{
  border: 0.1px solid;
  border-radius: 15px;
  border-color: #6666666d;
}
.container {
  display: flex;
  align-items: center;
  padding: 10px;
}
.userimage {
  width: 45px;
  height: 45px;
}
.input {
  margin-left: 10px;
}
.comment-section {
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  border-top: 1px solid #ccc;
  border-radius: 15px;
}
h1 {
  font-size: 2em;
  color: #666;
  margin: 20px 0 10px 0;
  font-weight: 400;
  text-align: center;
}
.paragraph {
  text-indent: 2em;
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  font-weight: 300;
}
.operate {
  display: flex;
  justify-content: flex-end;
  width: 1000px;
}
.information {
  text-align: center;
  width: 100%;
}
.comment-section {
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 20px;
}
.like-button {
  background-color: #008cba;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
}
.like-button:hover {
  background-color: #099cc5;
}
.delete-button {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
}
.delete-button:hover {
  background-color: #cc0000;
}
.content{
  margin: 10px;
}
</style>
