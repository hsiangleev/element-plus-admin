<template>
    <div class='content'>
        <el-tag>
            <el-link
                type='primary'
                href='https://github.com/hsiangleev/element-plus-admin'
                target='_blank'
                :underline='false'
            >
                github仓库地址
            </el-link>
        </el-tag>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Workplace'
})
</script>