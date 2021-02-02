<template>
    <div class='flex items-center px-4'>
        <span
            class='text-2xl cursor-pointer'
            :class='{ "el-icon-s-fold": !menubar.status, "el-icon-s-unfold": menubar.status }'
            @click='changeCollapsed'
        />
        <!-- 面包屑导航 -->
        <div class='px-4 hidden-xs-only'>
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
    <div class='flex items-center flex-row-reverse px-4 min-width-32'>
        <!-- 用户下拉 -->
        <el-dropdown>
            <span class='el-dropdown-link flex flex-center mx-2'>
                <el-avatar
                    :size='30'
                    src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                />
                <span class='ml-2'>{{ userInfo.name }}</span>
                <i class='el-icon-arrow-down el-icon--right' />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-link
                            href='https://github.com/hsiangleev'
                            target='_blank'
                            :underline='false'
                        >
                            个人中心
                        </el-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-link
                            href='https://github.com/hsiangleev/element-plus-admin'
                            target='_blank'
                            :underline='false'
                        >
                            项目地址
                        </el-link>
                    </el-dropdown-item>
                    <el-dropdown-item
                        divided
                        @click='logout'
                    >
                        退出登录
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        
        <Notice />
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, watch } from 'vue'
import { useStore } from '/@/store/index'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import Notice from '/@/layout/components/notice.vue'

interface IBreadcrumbList {
    path: string
    title: string | symbol
}
// 面包屑导航
const breadcrumb = (route: RouteLocationNormalizedLoaded) => {
    const fn = () => {
        const breadcrumbList:Array<IBreadcrumbList> = []
        if(route.matched[0] && route.matched[0].name === 'Dashboard') return breadcrumbList
        route.matched.forEach(v => {
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
    watch(() => route.path, () => data.breadcrumbList = fn())
    return { data }
}

export default defineComponent ({
    name: 'LayoutNavbar',
    components: {
        Notice
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const changeCollapsed = () => store.commit('layout/changeCollapsed')
        const logout = () => store.commit('layout/logout')
        return {
            menubar: store.state.layout.menubar,
            userInfo: store.state.layout.userInfo,
            changeCollapsed,
            logout,
            ...breadcrumb(route)
        }
    }
})
</script>