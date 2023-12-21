import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchTempStore = defineStore('serachTemp', () => {

    function saveKeyword(keyword) {
        localStorage.setItem('searchKeyword',JSON.stringify(keyword))
    }

    function getKeyword() {
        return JSON.parse(localStorage.getItem('searchKeyword'))
    }

  return { saveKeyword, getKeyword }
})