import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useNewsContentStore = defineStore('newsContent', () => {

    const comments = {cover: '', name: '', content: '', like: '', dislike: ''}
    const commentsList = []
    const news = {
        id: '',
        title: '',
        cover: '',
        content: '',
        views: '',
        sector: '',
        comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '有态度网友0ue3Kh', content: '领先全球几十年', like: '4', dislike: '1'}]
    }
    var newsList = ref([
        {
            id: '1',
            title: '工信部等十四部门：开展网络安全技术应用试点示范工作',
            cover: '../assets/imgs/嘉闻logo.png',
            content: '工信部等十四部门办公厅（办公室、秘书局、综合司）发布关于开展网络安全技术应用试点示范工作的通知，试点示范内容为，适应数字产业化和产业数字化发展新形势，以新型信息基础设施安全、数字化应用场景安全、安全基础能力提升为主线，面向公共通信和信息服务、人力资源社会保障、水利、卫生健康、应急管理、广播电视、金融、交通运输、邮政等重要行业领域网络和数据安全保障需求，从基础网络安全、云计算安全、人工智能安全、大数据安全、信创安全、商用密码、车联网安全、物联网安全、中小企业数字化转型安全、网络安全共性技术、网络安全创新服务、教育技术产业融合发展联合体、网络安全“高精尖”创新平台等13个重点方向，遴选一批技术先进、应用成效显著的试点示范项目。',
            views: '62185',
            sector: '财经',
            comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '有态度网友0ue3Kh', content: '领先全球几十年', like: '4', dislike: '1'}]
        },
        {
            id: '2',
            title: '电影《头文字D》主演夏树近照曝光，颜值变化很大',
            cover: '../assets/imgs/嘉闻logo.png',
            content: '2005年，天王歌手周杰伦主演的电影《头文字D》上映。并且这一部电影请来的明星阵容也非常的豪华，全部都是当年最有名气男星。比如余文乐、钟镇涛和陈冠希。这些男星不仅颜值高，在当年票房的号召力也很高。所以在那个时候，这部电影票房超过了六千万。这要是放到现在，最少能超过10亿。',
            views: '128195',
            sector: '娱乐',
            comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '煉金術師yun', content: '按当时，应该是泽尻英龙华', like: '521', dislike: '12'}]
        },
        {
            id: '3',
            title: '凤凰传奇告诉我们，最高端的商战往往以最朴素的方式出现',
            cover: '../assets/imgs/嘉闻logo.png',
            content: '事件的起因是11月28号，网易云音乐官宣了凤凰传奇全部版权回归的消息，并提前在站内开启了为期六周的限免福利活动，等于是让所有用户都能在这段时间听到凤凰传奇的歌。一方面，通过这种方式让用户知道凤凰传奇版权回归的消息，一方面也算是给用户送了一波福利。',
            views: '72195',
            sector: '娱乐',
            comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '有态度网友Laila', content: '你喜欢用网易云音乐还是qq音乐？'}]
        },
        {
            id: '4',
            title: '工信部等十四部门：开展网络安全技术应用试点示范工作',
            cover: '../assets/imgs/嘉闻logo.png',
            content: '工信部等十四部门办公厅（办公室、秘书局、综合司）发布关于开展网络安全技术应用试点示范工作的通知，试点示范内容为，适应数字产业化和产业数字化发展新形势，以新型信息基础设施安全、数字化应用场景安全、安全基础能力提升为主线，面向公共通信和信息服务、人力资源社会保障、水利、卫生健康、应急管理、广播电视、金融、交通运输、邮政等重要行业领域网络和数据安全保障需求，从基础网络安全、云计算安全、人工智能安全、大数据安全、信创安全、商用密码、车联网安全、物联网安全、中小企业数字化转型安全、网络安全共性技术、网络安全创新服务、教育技术产业融合发展联合体、网络安全“高精尖”创新平台等13个重点方向，遴选一批技术先进、应用成效显著的试点示范项目。',
            views: '62185',
            sector: '财经',
            comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '有态度网友0ue3Kh', content: '领先全球几十年', like: '4', dislike: '1'}]
        },
        {
            id: '5',
            title: '电影《头文字D》主演夏树近照曝光，颜值变化很大',
            cover: '../assets/imgs/嘉闻logo.png',
            content: '2005年，天王歌手周杰伦主演的电影《头文字D》上映。并且这一部电影请来的明星阵容也非常的豪华，全部都是当年最有名气男星。比如余文乐、钟镇涛和陈冠希。这些男星不仅颜值高，在当年票房的号召力也很高。所以在那个时候，这部电影票房超过了六千万。这要是放到现在，最少能超过10亿。',
            views: '128195',
            sector: '娱乐',
            comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '煉金術師yun', content: '按当时，应该是泽尻英龙华', like: '521', dislike: '12'}]
        },
        {
            id: '6',
            title: '凤凰传奇告诉我们，最高端的商战往往以最朴素的方式出现',
            cover: '../assets/imgs/嘉闻logo.png',
            content: '事件的起因是11月28号，网易云音乐官宣了凤凰传奇全部版权回归的消息，并提前在站内开启了为期六周的限免福利活动，等于是让所有用户都能在这段时间听到凤凰传奇的歌。一方面，通过这种方式让用户知道凤凰传奇版权回归的消息，一方面也算是给用户送了一波福利。',
            views: '72195',
            sector: '娱乐',
            comments: [{cover: '../assets/imgs/嘉闻logo.png', name: '有态度网友Laila', content: '你喜欢用网易云音乐还是qq音乐？'}]
        }
    ])

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

    function addNews(news){
        if(localStorage.getItem('newsList')){
            newsList = JSON.parse(localStorage.getItem('newsList'))
            newsList._value.push(news)
            localStorage.setItem('newsList',JSON.stringify(newsList))
        } else {
            newsList._value.push(news)
            localStorage.setItem('newsList',JSON.stringify(newsList))
        }
    }

    function getByName(name){
        var targetList = ref([])
        for (let index = 0; index < newsList.value.length; index++) {
            if(newsList._value[index].sector === name){
                targetList.value.push(newsList._value[index])
            }
        }
        return targetList
    }

    function getByTitle(keyword){
        console.log(keyword)
        const filterList = computed(() => {
            return newsList.value.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
        })
        return filterList
    }

    function getTypeNum(type){
        var count = 0
        for (let index = 0; index < newsList.value.length; index++) {
            if(newsList._value[index].sector === type){
                count++
            }            
        }
        return count
    }

    function getEassyById(id) {
        var list = getList(false,'')
        for (let index = 0; index < list.length; index++) {
            if(list[index].id == id) {
                return list[index]
            }
        }
    }

    return { addNews, getByName, getTypeNum, getByTitle, getList, 
        getEassyById,
        newsList}
})