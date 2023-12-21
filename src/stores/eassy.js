import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEassyStore = defineStore('eassy', () => {

    const reduceFlag = ref(false)
    const saveFlag = ref(false)
    function saveText(content){
        content = JSON.stringify(content)
        window.localStorage.setItem('eassyContent',content)
    }
    function saveTitle(title) {
        localStorage.setItem('submitTitle',JSON.stringify(title))
    }
    function getText(){
        if(window.localStorage.getItem('eassyContent')){
            return JSON.parse(window.localStorage.getItem('eassyContent'))
        } else {
            content = JSON.stringify('')
            window.localStorage.setItem('eassyContent',content)
        }
    }
    function reduceBeTrueFlag() {
        reduceFlag.value = true
      }
    function reduceBeFalseFlag() {
        reduceFlag.value = false
    }
    function saveBeTrueFlag() {
        saveFlag.value = true
      }
    function saveBeFalseFlag() {
        saveFlag.value = false
    }
    
    
  return { saveText, getText, reduceBeTrueFlag, reduceBeFalseFlag, saveBeTrueFlag, saveBeFalseFlag, 
    saveTitle, 
    reduceFlag, saveFlag}
})