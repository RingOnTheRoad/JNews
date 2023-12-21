<script setup>
import { ref, watch } from 'vue';
import {useImgsStore} from '../stores/imgs.js'
import {useEassyStore} from '../stores/eassy.js'
import Editor from './Editor.vue'
import Cropper from './Cropper.vue'
import { useEditTempStore } from '../stores/editTemp.js'
import { submit_to } from '../stores/submitToEassy.js'
import { onMounted } from 'vue';

  onMounted(() => {
    editTemp.clean()
  })

  const imgsStore = useImgsStore()
  const eassyStore = useEassyStore()
  const editTemp = useEditTempStore()
  var disabledFlag = false
  var dialogVisible = ref(false)
  var cancelFlag = ref(false)
  var inputTopic = ref('' + editTemp.getTitle())

  function submitNews() {
    saveText(content)
    eassyStore.saveTitle(inputTopic)
    submit_to()
    console.log('完成')
    // window.open("about:blank", "_top").close()
  }

  function saveText(content) {
    if(content !== ''){
      eassyStore.saveBeFalseFlag()
      saveFlag.value = eassyStore.saveFlag
      eassyStore.saveText(content)
      eassyStore.saveBeTrueFlag()
      setTimeout(() => {
        saveFlag.value= eassyStore.saveFlag
      },1000)
      setTimeout(() => {
        eassyStore.saveBeFalseFlag()
        saveFlag.value = eassyStore.saveFlag
    },3000)
    } else {
      eassyStore.reduceBeTrueFlag()
      setTimeout(() => {
        reduceFlag.value = eassyStore.reduceFlag
      },1000)
      setTimeout(() => {
        eassyStore.reduceBeFalseFlag()
      reduceFlag.value = eassyStore.reduceFlag
      },3000)
    }
  }
  function getText() {
    eassyStore.reduceBeFalseFlag()
    reduceFlag.value = eassyStore.reduceFlag
    content.value = eassyStore.getText()
    if(!content.value){
      eassyStore.reduceBeTrueFlag()
      setTimeout(() => {
        reduceFlag.value = eassyStore.reduceFlag
      },1000)
      setTimeout(() => {
        eassyStore.reduceBeFalseFlag()
      reduceFlag.value = eassyStore.reduceFlag
      },3000)
    }
  }
  
  var content = editTemp.getContent()
  var saveFlag = ref(eassyStore.saveFlag)
  var reduceFlag = ref(eassyStore.reduceFlag)
  var cropperURL = ref('')
  const cropperRef = ref(null)

  function getCutImgURL(url) {
    cropperURL.value = url
  }
  
  const getImgMsg = (UploadFile,UploadFiles) => {
    cropperURL.value = URL.createObjectURL(UploadFiles.raw)
    cancelFlag = false
    dialogVisible.value = true
    watch(dialogVisible, (newValue,oldValue) => {
      if(newValue === false && cropperURL.value !== URL.createObjectURL(UploadFiles.raw) && 
      !cancelFlag) {
        imgsStore.addImgs(cropperURL.value)
        const range = document.createRange()
        var fragment = range.createContextualFragment(
          `<img class="insertImg" src="${imgsStore.getImgs()}" />`)
        if(document.getElementsByClassName('insertImg').length) {
          document.getElementsByClassName('insertImg').src = imgsStore.getImgs()
        } else {
          document.body.getElementsByClassName('extraImgs').item(0).appendChild(fragment)
        }
      }
    })
    disabledFlag = true
  }
  const httpRequest = () => {
    return new Promise((resolve,reject) => {resolve(1)})
  }
  async function cutImg() {
    localStorage.removeItem('imgsURLs')
    await cropperRef.value.refGet()
    setTimeout(() => {dialogVisible.value = false},500)
  }
  function cancel() {
    cancelFlag = true
    cropperURL.value = null
    dialogVisible.value = false
  }
  
</script>

<template>
 <div class="editPart">
    <div class="extraImgs"></div>
    <div class="topButton">
      <el-upload :accept="'.png,.jpg'" :on-success="getImgMsg" 
      :http-request="httpRequest" :show-file-list="false" :disabled="disabledFlag">
        <el-button class="upImgButton" type="primary" :disabled="disabledFlag">
        上传封面图片<el-icon><Upload /></el-icon>
        </el-button>
      </el-upload>
    </div>
    <div class="topic">
      <div>
        <el-icon><Notification /></el-icon>
        <el-text size="large">文章标题</el-text>
      </div>
      <el-input class="topicContext" v-model="inputTopic" placeholder="请输入文章标题" 
      minlength="1" maxlength="30" show-word-limit style="width: 820px; right: 1%;"/>
    </div>
    <div class="bodyContext">
      <div>
        <el-icon><ChatLineSquare /></el-icon>
        <el-text size="large">文章正文</el-text>
      </div>
      <div class="mainEditor">
        <Editor v-model="content" />
      </div>
    </div>
    <div class="bottomButton">
      <el-button class="botButton" type="success" @click="saveText(content)">保存</el-button>
      <el-button class="botButton" type="warning" @click="getText()">还原</el-button>
      <el-button class="botButton" type="primary" @click="submitNews()">发布</el-button>
    </div>
 </div>
 <div class="popUps">
    <el-alert title='保存成功!' type="success" center show-icon :closable="false" v-if="saveFlag"></el-alert>
    <el-alert title='您没有内容保存!' type="warning" center show-icon :closable="false" v-if="reduceFlag"></el-alert>
 </div>
 <div class="dialogCropper">
  <el-dialog class="dialogInside" title="裁剪图片" v-model="dialogVisible" align-center>
    <Cropper ref="cropperRef" :cropperImg="cropperURL" @emit-submit-u-r-l="getCutImgURL"></Cropper>
    <div>
      <el-button class="dialogButton" type="default" @click="cancel()">取消</el-button>
      <el-button class="dialogButton" type="primary" @click="cutImg()">裁剪</el-button>
    </div>
  </el-dialog>
 </div>
</template>

<style>
 .editPart{
   display: flex;
   flex-direction: column;
 }
 .el-text{
  color: aliceblue;
 }
 .el-input{
  width: 800px;
 }
 .el-button{
  width: 100px;
  box-shadow: 0px 0px 10px rgba(0,0,0,.4);
 }
 .el-alert{
  position: absolute;
  top: 0%;
  left: 0%;
 }
 .el-dialog{
  display: flex;
 }
 .md-editor{
  width: 800px;
  height: 400px;
 }
 .dialogInside{
  min-width: 764px;
 }
 .dialogButton{
  width: 200px;
  position: relative;
  left: 8%;
 }
 .upImgButton{
  width: 800px;
 }
 .topButton{
  padding: 8px;
 }
 .topic{
  padding: 8px;
 }
 .bodyContext{
  padding: 8px;
 }
 .bottomButton{
  padding: 8px;
  display: flex;
 }
 .botButton{
  width: 258px;
 }
 .mainEditor{
  width: 800px;
 }
 .extraImgs{
  width: 100px;
  height: 100px;
  position: relative;
  left: 43.5%;
  padding: 5px;
  bottom: 5px;
 }
</style>