<template>
    <div
        v-for='(val,index) in data'
        :key='index'
        class='tab-list pb-3 border-b hover:bg-gray-100'
    >
        <div class='flex justify-between items-center'>
            <div class='flex items-center'>
                <div
                    v-if='val.imgUrl'
                    class='mr-4'
                >
                    <el-avatar
                        size='large'
                        :src='val.imgUrl'
                    />
                </div>
                <div>
                    <el-link
                        v-if='val.href'
                        type='primary'
                        :underline='false'
                        :href='val.href'
                    >
                        <p class='text-sm mb-1'>
                            {{ val.title }}
                        </p>
                    </el-link>
                    <p
                        v-else
                        class='text-sm mb-1'
                    >
                        {{ val.title }}
                    </p>
                    <p
                        v-if='val.subTitle'
                        class='text-xs text-gray-500'
                    >
                        {{ val.subTitle }}
                    </p>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IList {
    imgUrl: string
    title: string
    subTitle: string
    href?:string
}

export default defineComponent({
    name: 'List',
    props: {
        data: {
            type: Array as PropType<Array<IList>>,
            default: () => []
        }
    },
    setup() {
        return {}
    }
})
</script>
    