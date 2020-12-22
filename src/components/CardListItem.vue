<template>
    <el-col
        :xs='24'
        :sm='12'
        :xl='8'
    >
        <div class='card-list-item flex mb-5 text-sm'>
            <div
                class='text-right pr-3'
                :style='{"width": width}'
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
            slots: context.slots,
        }
    }
})
</script>

<style>
    .card-list-item,
    .card-list-item .el-form-item__content,
    .card-list-item .el-input .el-input__inner {
        height: 28px;
        line-height: 28px;
    }
    .card-list-item .el-form-item__content{
        font-size: 0.875rem;
    }
</style>
    