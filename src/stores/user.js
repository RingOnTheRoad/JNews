import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    var userList = ref([{
      account: "root12345",
      password: "root12345"
    }])
    const flag = ref(0);
    const capFlag = ref(false)
    const loginFlag = ref(false)
    const registerFlag = ref(false)
    const diffFlag = ref(false)
    const oriFlag = ref(false)

    function addUser(user) {
        const userListStorge = JSON.parse(window.localStorage.getItem('userList'))
        userListStorge._value.push(user)
        window.localStorage.setItem('userList',JSON.stringify(userListStorge))
    }
    function findUser(user) {
      const userListStorge = JSON.parse(window.localStorage.getItem('userList'))
      if(userListStorge) {
        for(var i=0;i<userListStorge._value.length;i++) {
          if(userListStorge._value[i].account === user.account) {
            return true
          }
        }
        return false
      } else {
        window.localStorage.setItem('userList',JSON.stringify(userList))
        return false
      }
    }
    function getOneUser() {
      return ref({
        account: "root12345",
        password: "root12345",
        email: '81625714@163.com',
        age: '12',
        sex: '1',
        address: ['广东省','梅州市','梅江区'],
        sign: '生活是一种态度，哥只是一个传说'
      })
    }
    function increaseFlag() {
      flag.value++
    }
    function decreaseFlag() {
      flag.value--
    }
    function capBeTrueFlag() {
      capFlag.value = true
    }
    function capBeFalseFlag() {
      capFlag.value = false
    }
    function loginBeTrueFlag() {
      loginFlag.value = true
    }
    function loginBeFalseFlag() {
      loginFlag.value = false
    }
    function registerBeTrueFlag() {
      registerFlag.value = true
    }
    function registerBeFalseFlag() {
      registerFlag.value = false
    }
    function diffBeTrueFlag() {
      diffFlag.value = true
    }
    function diffBeFalseFlag() {
      diffFlag.value = false
    }
    function oriBeTrueFlag() {
      oriFlag.value = true
    }
    function oriBeFalseFlag() {
      oriFlag.value = false
    }


  return { addUser, findUser, getOneUser, increaseFlag, 
    decreaseFlag, capBeTrueFlag, capBeFalseFlag, 
    loginBeTrueFlag, loginBeFalseFlag, registerBeTrueFlag, 
    registerBeFalseFlag, diffBeFalseFlag, diffBeTrueFlag, oriBeFalseFlag,
    oriBeTrueFlag,
    flag, capFlag, loginFlag, registerFlag, diffFlag, oriFlag}
})