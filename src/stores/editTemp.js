import { defineStore } from 'pinia'

export const useEditTempStore = defineStore('editTemp', () => {

    const title_temp = "请输入文章标题"
    const content_temp = ""

    function setTitle(title_value, edit_flag) {
        if(edit_flag) {
            localStorage.setItem('title_temp', JSON.stringify(title_value))
        } else {
            localStorage.setItem('title_temp', JSON.stringify(title_temp))
        }
    }

    function getTitle() {
        return JSON.parse(localStorage.getItem('title_temp'))
    }

    function setContent(content_value, edit_flag) {
        if(edit_flag) {
            localStorage.setItem('content_temp', JSON.stringify(content_value))
        } else {
            localStorage.setItem('content_temp', JSON.stringify(content_temp))
        }
    }

    function getContent() {
        return JSON.parse(localStorage.getItem('content_temp'))
    }

    function clean() {
        localStorage.removeItem('title_temp')
        localStorage.removeItem('content_temp')
    }
    
  return { setTitle, getTitle, getContent, setContent, clean }
})