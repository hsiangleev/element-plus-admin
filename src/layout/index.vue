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
                "absolute z-30": layout.menubar.status === 2, 
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
            <div class='layout-main-navbar flex justify-between items-center h-12 shadow-sm border-b border-gray-100 overflow-hidden'>
                <layout-navbar />
            </div>
            <div
                v-if='layout.setting.showTags'
                class='layout-main-tags h-10 leading-10 overflow-hidden shadow text-sm text-gray-600 px-3 position'
            >
                <layout-tags />
            </div>
            <div class='layout-main-content flex-1 overflow-hidden'>
                <layout-content />
            </div>
        </div>
        <div class='layout-sidebar-theme fixed right-0 top-64 z-10'>
            <layout-Theme />
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import LayoutContent from '/@/layout/components/content.vue'
import LayoutMenubar from '/@/layout/components/menubar.vue'
import LayoutNavbar from '/@/layout/components/navbar.vue'
import LayoutTags from '/@/layout/components/tags.vue'
import LayoutTheme from '/@/layout/components/theme.vue'
import { useStore } from '/@/store/index'
import throttle from '/@/utils/throttle'

export default defineComponent ({
    name: 'Layout',
    components: {
        LayoutContent,
        LayoutMenubar,
        LayoutNavbar,
        LayoutTags,
        LayoutTheme
    },
    setup() {
        const store = useStore()
        const changeDeviceWidth = () => store.commit('layout/changeDeviceWidth')
        const changeCollapsed = () => store.commit('layout/changeCollapsed')

        store.commit('layout/changeTheme')
        

        onMounted(() => {
            changeDeviceWidth()
            const throttleFn = throttle(300)
            let throttleF = async function() {
                await throttleFn()
                changeDeviceWidth()
            }
            window.addEventListener('resize', throttleF, true)
        })
        return {
            layout: store.state.layout,
            changeCollapsed
        }
    }
})
</script>