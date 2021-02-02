<template>
    <el-tabs type='border-card'>
        <el-tab-pane label='通知'>
            <list :data='data.list' />
        </el-tab-pane>
        <el-tab-pane label='关注'>
            <list :data='data.list' />
        </el-tab-pane>
        <el-tab-pane label='待办'>
            <list :data='data.list' />
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import List from '/@/components/List.vue'

export default defineComponent({
    name: 'ListTest',
    components: {
        List
    },
    setup() {
        const data = reactive({
            list: [
                { imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', title: '斗通关无际县军连用知政以该果思快领a。', subTitle: '2021/01/28 15:21:32', href: 'javascript:;' },
                { imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', title: '斗通关无际县军连用知政以该果思快领b。', subTitle: '2021/01/28 15:21:32' },
                { imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', title: '斗通关无际县军连用知政以该果思快领c。', subTitle: '2021/01/28 15:21:32' }
            ]
        })
        return {
            data
        }
    }
})
</script>
