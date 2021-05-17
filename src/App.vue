<template>
    <router-view />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { changeThemeDefaultColor } from '/@/utils/changeThemeColor'

export default defineComponent ({
    name: 'App',
    setup() {
        changeThemeDefaultColor()
    }
})
</script>
