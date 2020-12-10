<template>
    <div style='height: 1500px;width:100%'>
        <p v-action:add>
            add
        </p>
        <p v-action:update>
            update
        </p>
        <p v-action:delete>
            delete
        </p>
        <el-input
            v-model='input'
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'ProjectImport',
    setup() {
        const input = ref('')
        return {
            input,
        }
    }
})
</script>

