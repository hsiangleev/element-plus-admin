<template>
    <div class='layout flex h-screen'>
        <div
            class='layout-sidebar-mask fixed w-screen h-screen bg-black bg-opacity-25 z-20'
            :class='{"hidden": layout.menubar.status !== 2 }'
            @click='changeCollapsed'
        />
        <div
            class='layout-sidebar flex flex-col h-screen transition-width duration-200 shadow'
            :class='{ 
                "w-64": layout.menubar.status === 0 || layout.menubar.status === 2, 
                "w-0": layout.menubar.status === 3, 
                "w-16": layout.menubar.status === 1, 
                "absolute z-30": layout.menubar.status === 2 || layout.menubar.status === 3, 
            }'
        >
            <div class='layout-sidebar-logo flex h-12 relative flex-center shadow-lg'>
                {{ layout.menubar.status === 0 || layout.menubar.status === 2 ? 'hsianglee' : (layout.menubar.status === 1 ? 'lee' : '') }}
            </div>
            <div class='layout-sidebar-menubar flex flex-1 overflow-hidden'>
                <layout-menubar />
            </div>
        </div>
        <div class='layout-main flex flex-1 flex-col overflow-x-hidden overflow-y-auto'>
            <div class='layout-main-navbar flex justify-between items-center h-12 shadow-sm overflow-hidden relative z-10'>
                <layout-navbar />
            </div>
            <div
                v-if='layout.setting.showTags'
                class='layout-main-tags h-8 leading-8 text-sm text-gray-600 relative'
            >
                <layout-tags />
            </div>
            <div class='layout-main-content flex-1 overflow-hidden'>
                <layout-content />
            </div>
        </div>
        <div class='layout-sidebar-sidesetting fixed right-0 top-64 z-10'>
            <layout-side-setting />
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import LayoutContent from '/@/layout/components/content.vue'
import LayoutMenubar from '/@/layout/components/menubar.vue'
import LayoutNavbar from '/@/layout/components/navbar.vue'
import LayoutTags from '/@/layout/components/tags.vue'
import LayoutSideSetting from '/@/layout/components/sideSetting.vue'
import { useStore } from '/@/store/index'
import { throttle } from '/@/utils/tools'
import changeThemeColor from '/@/utils/changeThemeColor'

export default defineComponent ({
    name: 'Layout',
    components: {
        LayoutContent,
        LayoutMenubar,
        LayoutNavbar,
        LayoutTags,
        LayoutSideSetting
    },
    setup() {
        const store = useStore()
        const changeDeviceWidth = () => store.commit('layout/changeDeviceWidth')
        const changeCollapsed = () => store.commit('layout/changeCollapsed')
        const { setting } = store.state.layout
        const defaultTheme = ref(setting.color.primary)

        store.commit('layout/changeTheme')

        onMounted(async() => {
            changeDeviceWidth()
            const throttleFn = throttle(300)
            let throttleF = async function() {
                await throttleFn()
                changeDeviceWidth()
            }
            window.addEventListener('resize', throttleF, true)
            await changeThemeColor(defaultTheme.value)

        })
        return {
            layout: store.state.layout,
            changeCollapsed
        }
    }
})
</script>

<style lang='postcss' scoped>
    ::v-deep(.layout-sidebar-sidesetting .el-drawer__header) {
        margin-bottom: 0;
    }
</style>