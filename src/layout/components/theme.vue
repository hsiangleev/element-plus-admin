<template>
    <div>
        <el-color-picker
            v-model='defaultTheme'
            :predefine='["#409EFF", "#1890ff", "#304156","#212121","#11a983", "#13c2c2", "#6959CD", "#f5222d" ]'
            size='mini'
            @change='changeThemeColor'
        />
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { store } from '/@/store/index'
import changeThemeColor from '/@/utils/changeThemeColor'

export default defineComponent({
    name: 'LayoutTheme',
    setup() {
        const { setting } = store.state.layout
        const defaultTheme = ref(setting.color.primary)
        return {
            defaultTheme,
            changeThemeColor
        }
    }
})
</script>