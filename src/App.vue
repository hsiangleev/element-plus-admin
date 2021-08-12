<template>
    <ElConfigProvider :locale='locale'>
        <router-view />
    </ElConfigProvider>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { ElConfigProvider } from 'element-plus'
import { changeThemeDefaultColor } from '/@/utils/changeThemeColor'

export default defineComponent ({
    name: 'App',
    components: {
        ElConfigProvider
    },
    setup() {
        changeThemeDefaultColor()

        return {
            locale
        }
    }
})
</script>
