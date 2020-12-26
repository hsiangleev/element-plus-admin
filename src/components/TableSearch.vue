<template>
    <div class='table-search flex flex-col'>
        <transition name='el-zoom-in-top'>
            <div v-show='isShow'>
                <slot name='search' />
            </div>
        </transition>
        
        <div class='flex justify-between items-center mb-2'>
            <div>
                <el-button-group>
                    <el-button
                        type='primary'
                        icon='el-icon-edit'
                    />
                    <el-button
                        type='primary'
                        icon='el-icon-share'
                    />
                    <el-button
                        type='primary'
                        icon='el-icon-delete'
                    />
                </el-button-group>
            </div>
            <el-button
                type='text'
                @click='isShow=!isShow'
            >
                高级搜索<i :class='{"el-icon-arrow-down": !isShow, "el-icon-arrow-up": isShow}' />
            </el-button>
        </div>
        <slot />
        <el-pagination
            :current-page='currentPage'
            :page-sizes='[10, 20, 50, 100]'
            :page-size='pageSize'
            layout='total, sizes, prev, pager, next, jumper'
            :total='total'
            @size-change='handleSizeChange'
            @current-change='handleCurrentChange'
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue'
export default defineComponent({
    name: 'TableSearch',
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        },
        total: {
            type: Number,
            default: 0
        },
    },
    emits: ['size-change', 'current-change'],
    setup(props, context: SetupContext) {
        const isShow = ref(false)
        const handleSizeChange = (v) => context.emit('size-change', v)
        const handleCurrentChange = (v) => context.emit('current-change', v)
        return {
            isShow,
            handleSizeChange,
            handleCurrentChange
        }
    }
        
})
</script>

<style scoped>
    
</style>
    