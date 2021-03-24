<template>
    <div class='content'>
        <a
            href='https://github.com/hsiangleev/element-plus-admin'
            class='absolute right-0 top-0 z-10'
        >
            <img
                width='149'
                height='149'
                src='https://layuiextend.hsianglee.cn/layui/images/forkme_right_red_aa0000.png'
                class='attachment-full size-full'
                alt='Fork me on GitHub'
                data-recalc-dims='1'
            >
        </a>
        <el-card
            class='mb-2'
            shadow='hover'
        >
            <div class='py-4 font-bold'>
                工作台
            </div>
            <el-row>
                <el-col
                    :xs='24'
                    :md='16'
                >
                    <div class='flex items-center'>
                        <div class='pr-4 flex items-center'>
                            <el-avatar
                                class='w-16 h-16'
                                src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                            />
                        </div>
                        <div>
                            <div class='text-xl'>
                                你好，{{ user.name }} ，祝你开心每一天！
                            </div>
                            <div class='text-sm text-gray-400 pt-2'>
                                饿了么－某某某某某某－某某某某某－某某某某某－某某某
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col
                    :xs='24'
                    :md='8'
                >
                    <div class='flex items-center flex-row-reverse'>
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>
                                访问量
                            </div>
                            <div class='text-xl'>
                                3,344
                            </div>
                        </div>
                        <el-divider
                            direction='vertical'
                            class='h-8'
                        />
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>
                                排名
                            </div>
                            <div class='text-xl'>
                                1/100
                            </div>
                        </div>
                        <el-divider
                            direction='vertical'
                            class='h-8'
                        />
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>
                                项目数量
                            </div>
                            <div class='text-xl'>
                                100
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-card>

        <el-row :gutter='15'>
            <el-col
                :md='24'
                :lg='16'
            >
                <list
                    type='card'
                    :data='list'
                >
                    <template #header>
                        <div class='card-header flex justify-between items-center'>
                            <span>进行中的项目</span>
                            <el-link
                                type='primary'
                                :underline='false'
                                href='javascript:;'
                            >
                                全部项目
                            </el-link>
                        </div>
                    </template>
                </list>

                <el-card
                    shadow='hover'
                    class='mb-2'
                >
                    <template #header>
                        <div class='card-header flex justify-between items-center'>
                            <span>动态</span>
                        </div>
                    </template>
                    <list :data='list'>
                        <template #default='scope'>
                            <el-button @click='edit(scope.item)'>
                                操作
                            </el-button>
                        </template>
                    </list>
                </el-card>
            </el-col>

            <el-col
                :md='24'
                :lg='8'
            >
                <el-card
                    shadow='hover'
                    class='mb-2'
                >
                    <template #header>
                        <div class='card-header flex justify-between items-center'>
                            <span>快速开始</span>
                        </div>
                    </template>
                    <div class='flex flex-wrap'>
                        <div
                            v-for='o in 7'
                            :key='o'
                            class='p-1'
                        >
                            <el-tag>
                                {{ '操作 ' + o }}
                            </el-tag>
                        </div>
                    </div>
                </el-card>

                <el-card
                    shadow='hover'
                    class='mb-2'
                >
                    <template #header>
                        <div class='card-header flex justify-between items-center'>
                            <span>快速开始</span>
                        </div>
                    </template>
                    <div
                        ref='chartDom'
                        class='w-full h-64'
                    />
                </el-card>

                <el-card
                    shadow='hover'
                    class='mb-2'
                >
                    <template #header>
                        <div class='card-header flex justify-between items-center'>
                            <span>圆饼图</span>
                        </div>
                    </template>
                    <div
                        ref='chartDom2'
                        class='w-full h-64'
                    />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import List, { IList } from '/@/components/List/index.vue'
import { useStore } from '/@/store/index'
import { echarts, ECOption } from '/@/components/Echart'

// list初始化
const listRender = () => {
    const list:IList[] = [
        { 
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            title: '支付宝',
            subTitle: '斗通关无际县军连用知政以该果思快领c。',
            tag: '科学搬砖组',
            time: '9小时前',
            href: 'javascript:;'
        },
        { 
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            title: '支付宝',
            subTitle: '斗通关无际县军连用知政以该果思快领c。',
            tag: '科学搬砖组',
            time: '9小时前'
        },
        { 
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            title: '支付宝',
            subTitle: '斗通关无际县军连用知政以该果思快领c。',
            tag: '科学搬砖组',
            time: '9小时前'
        },
        { 
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            title: '支付宝',
            subTitle: '斗通关无际县军连用知政以该果思快领c。',
            tag: '科学搬砖组',
            time: '9小时前'
        },
        { 
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            title: '支付宝',
            subTitle: '斗通关无际县军连用知政以该果思快领c。',
            tag: '科学搬砖组',
            time: '9小时前'
        },
        { 
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            title: '支付宝',
            subTitle: '斗通关无际县军连用知政以该果思快领c。',
            tag: '科学搬砖组',
            time: '9小时前'
        }
    ]
    const edit = (item:IList) => console.log(item)
    return { list, edit }
}

// 雷达图
const chartRadar:() => ECOption = () => {
    const option:ECOption = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配', '实际开销']
        },
        radar: {
            // shape: 'circle',
            axisName: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售', max: 6500 },
                { name: '管理', max: 16000 },
                { name: '信息技术', max: 30000 },
                { name: '客服', max: 38000 },
                { name: '研发', max: 52000 },
                { name: '市场', max: 25000 }
            ]
        },
        series: [{
            name: '预算 vs 开销',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销'
                }
            ]
        }]
    }
    return option
}

// 圆饼图
const chartPie:() => ECOption = () => {
    const option:ECOption = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                    { value: 300, name: '视频广告' }
                ]
            }
        ]
    }
    return option
}

// 图标初始化
const chartInit = () => {
    const chartDom = ref(null)
    const chartDom2 = ref(null)
    onMounted(() => {
        const optionsArray:echarts.ECharts[] = []
        let myChart = echarts.init(chartDom.value as unknown as HTMLElement)
        myChart.setOption(chartRadar())
        optionsArray.push(myChart)
        myChart = echarts.init(chartDom2.value as unknown as HTMLElement)
        myChart.setOption(chartPie())
        optionsArray.push(myChart)
        window.onresize = () => {
            optionsArray.forEach(v => v.resize())
        }
    })
    return {
        chartDom,
        chartDom2
    }
}

export default defineComponent({
    name: 'Workplace',
    components: {
        List
    },
    setup() {
        const store = useStore()

        return {
            user: store.state.layout.userInfo,
            ...listRender(),
            ...chartInit()
        }
    }
})
</script>