<template>
    <div>
        <el-row
            v-action='"add"'
            class='mb-1'
        >
            <el-button type='primary'>
                添加权限
            </el-button>
            <el-tag class='ml-1'>
                v-action='"add"'
            </el-tag>
        </el-row>
        <el-row
            v-action='"update"'
            class='mb-1'
        >
            <el-button type='primary'>
                修改权限
            </el-button>
            <el-tag class='ml-1'>
                v-action='"update"'
            </el-tag>
        </el-row>
        <el-row
            v-action='"remove"'
            class='mb-1'
        >
            <el-button type='primary'>
                删除权限
            </el-button>
            <el-tag class='ml-1'>
                v-action='"remove"'
            </el-tag>
        </el-row>
        
        <el-row
            v-action='["add", "update", "remove"]'
            class='mb-1'
        >
            <el-button type='primary'>
                添加，编辑，删除权限（或者关系，满足一个就可以显示）
            </el-button>
            <el-tag class='ml-1'>
                v-action='["add", "update", "remove"]'
            </el-tag>
        </el-row>
        <el-row
            v-action:and='["add", "update", "remove"]'
            class='mb-1'
        >
            <el-button type='primary'>
                添加，编辑，删除权限（并且关系，全部满足才能显示）
            </el-button>
            <el-tag class='ml-1'>
                v-action:and='["add", "update", "remove"]'
            </el-tag>
        </el-row>

        <el-row>
            <el-button
                type='primary'
                @click='logout'
            >
                退出并切换用户
            </el-button>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '/@/store/index'
export default defineComponent({
    name: 'Directive',
    setup() {
        const store = useStore()
        const logout = () => store.commit('layout/logout')
        return {
            logout
        }
    }
})
</script>

