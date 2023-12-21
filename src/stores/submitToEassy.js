import { ref } from 'vue'

function addNews(news){
    var newsList = ref([])
    if(localStorage.getItem('newsList')){
        newsList = JSON.parse(localStorage.getItem('newsList'))
        newsList._value.push(news)
        localStorage.setItem('newsList',JSON.stringify(newsList))
    } else {
        localStorage.setItem('newsList',JSON.stringify(newsList))
        newsList._value.push(news)
        localStorage.setItem('newsList',JSON.stringify(newsList))
    }
}

function getList(flag,eassyType) {
    var list_temp = []
    const push_list = []
    if(flag) {
        if(localStorage.getItem('newsList')){
            list_temp = JSON.parse(localStorage.getItem('newsList'))._value
            for (let index = 0; index < list_temp.length; index++) {
                if(list_temp[index].sector === eassyType){
                    push_list.push(list_temp[index])
                }
            }
            return push_list
        } else {
            localStorage.setItem('newsList',JSON.stringify(newsList))
            list_temp = JSON.parse(localStorage.getItem('newsList'))._value
            for (let index = 0; index < list_temp.length; index++) {
                if(list_temp[index].sector === eassyType){
                    push_list.push(list_temp[index])
                }
            }
            return push_list
        }
    } else {
        if(localStorage.getItem('newsList')){
            return JSON.parse(localStorage.getItem('newsList'))._value
        } else {
            localStorage.setItem('newsList',JSON.stringify(newsList))
            return JSON.parse(localStorage.getItem('newsList'))._value
        }
    }
}

export function submit_to() {
    const newsList = getList(true,'娱乐')
    const news = {
        id: parseInt(newsList[newsList.length - 1].id) + 1,
        title: JSON.parse(localStorage.getItem('submitTitle'))._value,
        cover: JSON.parse(window.localStorage.getItem('imgsURLs')),
        content: JSON.parse(window.localStorage.getItem('eassyContent')),
        views: '7381',
        sector: '娱乐',
        comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '有态度网友0ue3Kh', content: '领先全球几十年', like: '4', dislike: '1'}]
    }
    addNews(news)
}