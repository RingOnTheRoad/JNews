<script setup>
 import * as echarts from 'echarts';
 import { useNewsContentStore } from '../stores/newsContent.js'
 import { onMounted } from 'vue';

onMounted(() => {
    const newsContentStore = useNewsContentStore()
    const option = {
        title: {
            text: '新闻类型',
            left: 'center',
            top: 'center',
            textStyle: {
                fontWeight: 'lighter'
            }
        },
        tooltip:{
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                data: [
                    {
                        value: newsContentStore.getTypeNum('财经'),
                        name: '财经'
                    },
                    {
                        value: newsContentStore.getTypeNum('娱乐'),
                        name: '娱乐'
                    }
                ]
            }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
    let newsChart = echarts.init(document.getElementById('ECharts'))
    newsChart.setOption(option)
})

</script>



<template>
 <div class="main">
    <div id="ECharts"></div>
 </div>
</template>

<style scoped>
 .main{
    width: 100%;
 }
 #ECharts{
    width: 500px;
    height: 500px;
 }
</style>