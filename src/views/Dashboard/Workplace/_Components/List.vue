<template>
    <list type='card' :data='list'>
        <template #header>
            <div class='card-header flex justify-between items-center'>
                <span>进行中的项目</span>
                <el-link type='primary' :underline='false' href='javascript:;'>全部项目</el-link>
            </div>
        </template>
    </list>

    <el-card shadow='hover' class='mb-2'>
        <template #header>
            <div class='card-header flex justify-between items-center'>
                <span>动态</span>
            </div>
        </template>
        <list :data='list'>
            <template #default='scope'>
                <el-button @click='edit(scope.item)'>操作</el-button>
            </template>
        </list>
    </el-card>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import List, { IList } from '/@/components/List/index.vue'

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

export default defineComponent({
    components: {
        List
    },
    setup() {
        
        return {
            ...listRender()
        }
    }
})
</script>