import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useImgsStore = defineStore('imgs', () => {

    var imgsListStorge = ref([])
    var imgsStorge = ref(null)

    function addImgs(imgsURL) {
        window.localStorage.setItem('imgsURLs',JSON.stringify(imgsURL))
    }
    function getImgs() {
        return JSON.parse(window.localStorage.getItem('imgsURLs'))
    }
  return { addImgs, getImgs }
})