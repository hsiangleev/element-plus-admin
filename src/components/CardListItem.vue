<template>
    <el-col
        :xs='24'
        :sm='12'
        :xl='8'
    >
        <div class='card-list-item flex mb-3 text-sm'>
            <div
                class='text-right pr-3'
                :style='{"line-height": "28px","width": width, "min-width": width}'
            >
                <span
                    v-if='isRequire'
                    class='text-red-600 select-none'
                >*</span>
                <slot name='key' />
                <span>:</span>
            </div>
            <div
                class='flex-1 font-semibold'
                :class='{"truncate": !prop}'
                :style='{"line-height": !prop ? "28px" : "inherit"}'
            >
                <el-form-item
                    v-if='prop'
                    :prop='prop'
                >
                    <slot name='value' />
                </el-form-item>
                <slot
                    v-else
                    name='value'
                />
            </div>
        </div>
    </el-col>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
export default defineComponent({
    name: 'CardListItem',
    props: {
        width: {
            type: String,
            default: '80px'
        },
        isRequire: {
            type: Boolean,
            default: false
        },
        prop: {
            type: String,
            default: ''
        }
    },
    emits: ['update:show'],
    setup(props, context: SetupContext) {
        return {
            slots: context.slots
        }
    }
})
</script>

<style>
    .card-list-item .el-form-item--mini.el-form-item,
    .el-form-item--small.el-form-item {
        margin-bottom: 0;
    }

    .card-list-item .el-select,
    .card-list-item .el-date-editor.el-input,
    .card-list-item .el-date-editor.el-input__inner {
        width: 100%;
    }
</style>
    