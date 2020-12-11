<template>
    <div class='flex items-center px-4'>
        <span
            class='text-2xl cursor-pointer'
            :class='{ "el-icon-s-fold": !menubar.status, "el-icon-s-unfold": menubar.status }'
            @click='changeCollapsed'
        />
        <!-- 面包屑导航 -->
        <div class='px-4'>
            <el-breadcrumb separator='/'>
                <el-breadcrumb-item :to='{ path: "/" }'>
                    主页
                </el-breadcrumb-item>
                <el-breadcrumb-item
                    v-for='v in data.breadcrumbList'
                    :key='v.path'
                    :to='v.path'
                >
                    {{ v.title }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
    <div class='flex items-center px-4'>
        <el-dropdown>
            <span class='el-dropdown-link'>
                admin<i class='el-icon-arrow-down el-icon--right' />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>项目地址</el-dropdown-item>
                    <el-dropdown-item
                        divided
                        @click='logout'
                    >
                        退出登录
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, watch } from 'vue'
import { useStore } from '/@/store/index'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'

interface IBreadcrumbList {
    path: string
    title: string | symbol
}
// 面包屑导航
const breadcrumb = (route: RouteLocationNormalizedLoaded) => {
    const fn = () => {
        const breadcrumbList:Array<IBreadcrumbList> = []
        if(route.matched[0] && route.matched[0].name === 'Dashboard') return breadcrumbList
        route.matched.forEach(v=>{
            const obj:IBreadcrumbList = {
                title: v.meta.title,
                path: v.path
            }
            breadcrumbList.push(obj)
        })
        return breadcrumbList
    }
    let data = reactive({
        breadcrumbList: fn()
    })
    watch(()=>route.path, ()=>data.breadcrumbList = fn())
    return data
}

export default defineComponent ({
    name: 'LayoutNavbar',
    setup() {
        const store = useStore()
        const route = useRoute()
        const changeCollapsed = ()=>store.commit('layout/changeCollapsed')
        const logout = ()=>store.commit('layout/logout')
        const data = breadcrumb(route)
        return {
            menubar: store.state.layout.menubar,
            changeCollapsed,
            logout,
            data
        }
    }
})
</script>
