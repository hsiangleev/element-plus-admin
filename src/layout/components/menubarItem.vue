<template>
    <el-submenu
        v-if='haChild'
        :key='menuList.path'
        :index='menuList.path'
    >
        <template #title>
            <i :class='menuList.meta.icon || "el-icon-location"' />
            <span>{{ menuList.meta.title }}</span>
        </template>
        <el-menu-item-group>
            <menubar-item
                v-for='v in cMenuList'
                :key='v.path'
                :index='v.path'
                :menu-list='v'
            />
        </el-menu-item-group>
    </el-submenu>

    <el-menu-item
        v-else
        :key='menuList.path'
        :index='menuList.path'
    >
        <i :class='menuList.meta.icon || "el-icon-setting"' />
        <template #title>
            {{ menuList.meta.title }}
        </template>
    </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { IMenubarList } from '/@/type/store/layout'
export default defineComponent({
    name: 'MenubarItem',
    props: {
        menuList: {
            type: Object,
            default: () => {return {}}
        }
    },
    setup(context) {
        const cMenuList = computed(() => context.menuList.children.filter((v:IMenubarList) => !v.hidden))
        return {
            haChild: context.menuList.children && context.menuList.children.length > 0,
            cMenuList
        }
    }
})
</script>