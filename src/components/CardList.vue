<template>
    <div class='card-list mb-2'>
        <el-card
            class='box-card'
            shadow='hover'
        >
            <template
                v-if='showHeader'
                #header
            >
                <div class='flex justify-between items-center'>
                    <span>{{ title }}</span>
                    <slot name='btn' />
                </div>
            </template>
            <ul
                v-if='type === "default"'
                class='card-list-body flex flex-col text-sm'
            >
                <li
                    v-for='(v,i) in listItem'
                    :key='i'
                >
                    <div :class='{"card-list-text": true,"nowrap": isNowrap, "wrap": !isNowrap}'>
                        <span
                            v-if='showListstyle'
                            class='card-list-item-circle'
                        />
                        <a
                            v-if='v.url' 
                            :href='v.url'
                            :target='v.target || "_self"'
                            :class='{"nowrap": isNowrap, "wrap": !isNowrap}'
                        >{{ v.text }}</a>
                        <template v-else>
                            {{ v.text }}
                        </template>
                    </div>
                    <div
                        v-if='v.mark'
                        class='card-list-mark'
                    >
                        {{ v.mark }}
                    </div>
                </li>
            </ul>
            <el-form
                :ref='ref'
                class='card-list-form'
                :model='form'
                :rules='rules'
                size='mini'
            >
                <el-row :gutter='15'>
                    <slot name='KeyValue' />
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref, Ref } from 'vue'

// 表单校验
export async function validate(ref: Ref):Promise<boolean> {
    return new Promise(resolve=>ref.value.ref.value.validate((valid:boolean)=>resolve(valid)))
}

export default defineComponent({
    name: 'CardList',
    props: {
        type: {
            type: String,
            default: 'default',
            validator: function(value: string) {
                return ['default', 'KeyValue'].indexOf(value) !== -1
            }
        },
        ref: {
            type: Object,
            default: ref(null)
        },
        form: {
            type: Object,
            default: ()=>{return {}}
        },
        rules: {
            type: Object,
            default: ()=>{return {}}
        },
        listItem: {
            type: Array,
            default: ()=>[]
        },
        title: {
            type: String,
            default: '标题'
        },
        showHeader: {
            type: Boolean,
            default: false
        },
        // 是否不换行
        isNowrap: {
            type: Boolean,
            default: true
        },
        showListstyle: {
            type: Boolean,
            default: true
        },
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
    .card-list .el-card__header{
        padding: 10px 15px;
    }
    .card-list .el-button{
        padding: 4px 6px;
        border-radius: 3px;
    }
</style>
<style scoped>
    .card-list-body{
        list-style: square;
    }
    .card-list-body>li{
        list-style: square;
        display: flex;
        padding: 3px 0;
        align-items: center;
        justify-content: space-between;
    }
    .card-list-body>li>.card-list-mark{
        color: #888;
    }
    .card-list-body>li>.card-list-text{
        padding-right: 10px;
        color: #666;
    }
    .card-list-body>li>.card-list-text>a:hover{
        color: #409eff;
    }
    .card-list-body>li>.card-list-text.nowrap{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .card-list-body>li>.card-list-text.wrap{
        display: flex;
        align-items: center;
    }
    .card-list-body>li>.card-list-text>span.card-list-item-circle{
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #666;
        margin-right: 10px;
    }
    .card-list-body>li>.card-list-text.nowrap>span.card-list-item-circle{
        transform: translateY(-50%);
    }
    .card-list-body>li>.card-list-text.wrap>span.card-list-item-circle{
        min-width: 5px;
        min-height: 5px;
        max-width: 5px;
        max-height: 5px;
    }
</style>
    