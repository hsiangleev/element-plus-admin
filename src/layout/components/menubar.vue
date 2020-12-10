<template>
    <el-scrollbar wrap-class='scrollbar-wrapper'>
        <el-menu
            :default-active='activeMenu'
            :collapse='menubar.status === 1 || menubar.status === 3'
            class='el-menu-vertical-demo w-64'
            :collapse-transition='false'
            text-color='#fff'
            :unique-opened='true'
            @select='onOpenChange'
        >
            <menubar-item
                v-for='v in menuList'
                :key='v.path'
                :index='v.path'
                :menu-list='v'
            />
        </el-menu>
    </el-scrollbar>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import MenubarItem from '@src/layout/components/menubarItem.vue'
import { useStore } from '@src/store/index'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent ({
    name: 'LayoutMenubar',
    components: {
        MenubarItem
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const { menubar } = store.state.layout
        const menuList = menubar.menuList.filter(v=>!v.hidden)

        const activeMenu = computed(()=>{
            if(route.meta.activeMenu) return route.meta.activeMenu
            return route.path
        })
        const onOpenChange = d => router.push({ path: d })
        return {
            menubar,
            menuList,
            activeMenu,
            onOpenChange
        }
    }
})
</script>

<style>
.el-menu{
    background-color: #001529;
}
.el-menu .el-menu{
    background-color: #000c17;
}
.el-menu-item:focus, 
.el-menu-item:hover, 
.el-submenu__title:hover{
    background-color: transparent;
}
.el-menu-item.is-active{
    background-color: #1890ff;
    color: #fff;
}

</style>