<template>
    <i
        class='el-icon-s-tools text-2xl px-2 py-1 cursor-pointer rounded-l-md'
        @click='drawer=!drawer'
    />
    <el-drawer
        v-model='drawer'
        title='主题设置'
        size='260px'
    >
        <el-row :gutter='20'>
            <el-col
                v-for='(val,index) in theme'
                :key='index'
                :span='8'
            >
                <div
                    class='flex shadow-lg border border-gray-100 w-18 cursor-pointer m-1'
                    @click='changeTheme(index)'
                > 
                    <div class='flex flex-col w-4 h-16'>
                        <div
                            class='h-3'
                            :style='{"background-color": val.logoBg || val.sidebarBg}'
                        />
                        <div
                            class='flex-1'
                            :style='{"background-color": val.sidebarBg}'
                        />
                    </div>
                    <div class='flex flex-col flex-1'>
                        <div
                            class='h-3'
                            :style='{"background-color": val.navbarBg || "#fff"}'
                        />
                        <div
                            v-if='layout.setting.showTags'
                            class='h-2'
                            :style='{"background-color": val.tagsBg || "#fff"}'
                        />
                        <div
                            class='flex-1 relative'
                            :style='{"background-color": val.mainBg}'
                        >
                            <i
                                v-if='layout.setting.theme===index'
                                class='el-icon-check absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4'
                                style='color: #1890ff;'
                            />
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <div class='flex justify-between mt-5 px-2 py-1 items-center'>
            <div class='text-sm'>
                开启 Tags-View
            </div>
            <el-switch v-model='showTags' />
        </div>
    </el-drawer>
</template>

<script lang='ts'>
import { ref, defineComponent, watch } from 'vue'
import theme from '/@/config/theme'
import { useStore } from '/@/store/index'

export default defineComponent ({
    name: 'LayoutTheme',
    setup() {
        const store = useStore()
        const drawer = ref(false)
        const changeTheme = (index:number) => store.commit('layout/changeTheme', index)
        const showTags = ref(store.state.layout.setting.showTags)

        watch(() => showTags.value, () => store.commit('layout/changeTagsSetting', showTags.value))

        return {
            drawer,
            theme,
            changeTheme,
            layout: store.state.layout,
            showTags
        }
    }
})
</script>
