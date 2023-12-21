<script setup>
 import carousel1 from '../assets/imgs/nullAvatar.png'
 import { useUserStore } from '../stores/user.js'
 import { ref } from 'vue';

 const avatarURL = carousel1
 const userStorge = useUserStore()
 const user = userStorge.getOneUser()
 const editUser = ref();
 const showChangePwdDialog = ref(false);
 const showEditDialog = ref(false);
 const addressOptions = ref([
  {
    value: "广东省",
    label: "广东省",
    children: [
      {
        value: "梅州市",
        label: "梅州市",
        children: [
          {
            value: "梅江区",
            label: "梅江区"
          }
        ]
      },
      {
        value: "广州市",
        label: "广州市",
        children: [
          {
            value: "天河区",
            label: "天河区"
          }
        ]
      }
    ]
  }
 ])
 const addressProps = ref({
  value: "value",
  label: "label",
  children: "children"
 })
 const changePwdInfo = ref({
  oldPassword: "",
  newPassword: "",
  confirmPassword: ""
})
 var diffFlag = ref(userStorge.diffFlag)
 var oriFlag = ref(userStorge.oriFlag)

 function editUserProfile() {
    showEditDialog.value = true;
    editUser.value = user.value
 }
 function saveUserProfile() {
    user.value = editUser.value
    showEditDialog.value = false;
 }
 function cancelChangePassword() {
    showChangePwdDialog.value = false
    userStorge.diffBeFalseFlag()
    userStorge.oriBeFalseFlag()
 }
 function changePassword() {
    if (changePwdInfo.value.newPassword === changePwdInfo.value.confirmPassword) {
        if(user.value.password === changePwdInfo.value.newPassword){
            showChangePwdDialog.value = false;
            changePwdInfo.value = { oldPassword: "", newPassword: "", confirmPassword: "" };
            userStorge.diffBeFalseFlag()
            userStorge.oriBeFalseFlag()
        } else {
            userStorge.diffBeTrueFlag()
        }
    } else {
        userStorge.oriBeTrueFlag()
    }
 }
 
</script>

<template>
    <div class="main">
        <div class="mainCard">
            <div class="row1">
                <el-avatar :size="200" :src="avatarURL"></el-avatar>
                <div class="col1">
                    <text style="font-size: 40px;color: tomato;font-weight: 1000;">{{ user.account }}</text>
                    <text class="otherText">邮箱：{{ user.email }}</text>
                    <text class="otherText">年龄：{{ user.age }}</text>
                    <text class="otherText">性别：{{ user.sex === "1" ? '男' : '女' }}</text>
                    <text class="otherText">地址：{{ user.address.join('/') }}</text>
                    <text class="otherText">个性签名：{{ user.sign }}</text>
                </div>
            </div>
        </div>
        <div class="sideButton">
            <div class="col2">
                <el-button type="primary" @click="editUserProfile">编辑资料</el-button>
                <el-button type="warning" @click="showChangePwdDialog = true">修改密码</el-button>
            </div>
        </div>

        <div class="editDialog">
            <el-dialog v-model="showEditDialog" title="编辑资料" style="width: 500px; height: 500px;">

                <el-form label-width='100px' style="position: relative; right: 10%;top: 5%;">
                <el-form-item label="用户名">
                    <el-input v-model="editUser.account"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="editUser.email" type="email"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model.number="editUser.age" type="number"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="editUser.sex">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="地址">
                    <el-cascader v-model="editUser.address" :options="addressOptions" placeholder="请选择地址"
                        :props="addressProps">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input v-model="editUser.sign" type="textarea" style="width: 300px;"></el-input>
                </el-form-item>
                </el-form>
                
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showEditDialog = false" class="dialogBtn">取消</el-button>
                    <el-button type="primary" @click="saveUserProfile" class="dialogBtn">保存</el-button>
                </span>
            </el-dialog>
        </div>

        <div class="changeDialog">
            <el-dialog v-model="showChangePwdDialog" title="修改密码" style="width: 450px; height: 350px;">
                <el-form label-width="auto" style="position: relative; top: 15%; right: 10%;">
                    <el-form-item label="原密码">
                        <el-input v-model="changePwdInfo.oldPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input v-model="changePwdInfo.newPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model="changePwdInfo.confirmPassword" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelChangePassword" class="dialogBtn2">取消</el-button>
                    <el-button type="primary" @click="changePassword" class="dialogBtn2">保存</el-button>
                </span>
            </el-dialog>
        </div>

        <div class="popUps">
            <el-alert title="两次密码不一致!" type="error" center show-icon :closable="false" v-if=diffFlag></el-alert>
            <el-alert title="原密码错误!" type="error" center show-icon :closable="false" v-if=oriFlag></el-alert>
        </div>

    </div>
</template>



<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
 .mainCard{
    width: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 10px;
    padding-block: 10px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    right: 42.72%;
 }
 .row1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
 }
 .col1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
 }
 .col2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
 .otherText{
    font-size: 15px;
    font-weight: 150;
 }
 .sideButton{
    position: relative;
    right: 80%;
    bottom: 20%;
 }
 .el-button{
    width: 560px;
    margin: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
 }
 .dialogBtn{
    position: relative;
    left: 0%;
    top: 4%;
    width: 150px;
 }
 .dialogBtn2{
    position: relative;
    right: 8%;
    top: 15%;
    width: 150px;
 }
 .el-alert{
    position: absolute;
    top: 0%;
    left: 0%;
 }
</style>