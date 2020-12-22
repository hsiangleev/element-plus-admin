<template>
    <div class='content'>
        <el-row
            :gutter='15'
            class='clear-both'
        >
            <el-col :span='12'>
                <card-list
                    :list-item='listItem'
                    :show-header='false'
                    :is-nowrap='true'
                    :show-liststyle='false'
                />
            </el-col>
            <el-col :span='12'>
                <card-list
                    :list-item='listItem'
                    :show-header='false'
                    :is-nowrap='true'
                    :show-liststyle='true'
                />
            </el-col>
            <el-col :span='12'>
                <card-list
                    title='选择页'
                    :list-item='listItem'
                    :show-header='true'
                    :is-nowrap='true'
                    :show-liststyle='true'
                />
            </el-col>
            <el-col :span='12'>
                <card-list
                    title='选择页'
                    :list-item='listItem'
                    :show-header='true'
                    :is-nowrap='true'
                    :show-liststyle='true'
                >
                    <template #btn>
                        <el-button-group>
                            <el-button
                                icon='el-icon-delete'
                                @click='remove'
                            >
                                删除
                            </el-button>
                            <el-button
                                icon='el-icon-edit'
                                @click='edit'
                            >
                                编辑
                            </el-button>
                        </el-button-group>
                    </template>
                </card-list>
            </el-col>
            
            <el-col :span='24'>
                <card-list
                    :ref='el=>{refForm=el}'
                    type='KeyValue'
                    :show-header='true'
                    :form='form'
                    :rules='rules'
                >
                    <template #btn>
                        <el-button-group>
                            <el-button
                                icon='el-icon-edit'
                                @click='submit'
                            >
                                提交
                            </el-button>
                        </el-button-group>
                    </template>
                    <template #KeyValue>
                        <card-list-item width='100px'>
                            <template #key>
                                申请单号
                            </template>
                            <template #value>
                                2020001686
                            </template>
                        </card-list-item>
                        <card-list-item width='100px'>
                            <template #key>
                                项目编码
                            </template>
                            <template #value>
                                DC2000000373
                            </template>
                        </card-list-item>
                        <card-list-item
                            width='100px'
                            :is-require='true'
                            prop='Amt'
                        >
                            <template #key>
                                申报金额
                            </template>
                            <template #value>
                                <el-input v-model='form.Amt' />
                            </template>
                        </card-list-item>
                        <card-list-item width='100px'>
                            <template #key>
                                项目名称
                            </template>
                            <template #value>
                                <span>2020年广西一流学科建设项目（化学）</span>
                            </template>
                        </card-list-item>
                    </template>
                </card-list>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import CardList from '/@/components/CardList.vue'
import CardListItem from '/@/components/CardListItem.vue'
import { validate } from '/@/components/CardList.vue'

// 键值对样式，及表单校验
const keyValue = () => {
    const form = reactive({
        Amt: ''
    })
    const rules = reactive({
        Amt: [
            { required: true, message: '请输入申报金额', trigger: 'blur' },
        ]
    })
    const refForm = ref(null)
    const submit = async() => {
        const data = await validate(refForm)
        if(data){
            console.log(form)
        }
    }
    return {
        form,
        rules,
        submit,
        refForm
    }
}

export default defineComponent({
    name: 'CardListTest',
    components: {
        CardList,
        CardListItem
    },
    setup() {
        const show = ref(false)
        const listItem = ref([
            { text: '标题标题标题标题标题标题标题标题标题标题', mark: '2020/12/21', url: 'http://baidu.com', target: '_blank' },
            { text: '标题标题标题标题标题标题标题标题标题标题', mark: '2020/12/21' },
            { text: '标题标题标题标题标题标题标题标题标题标题', mark: '2020/12/21' },
        ])
        const remove = (v) => console.log(v)
        const edit = (v) => console.log(v)

        return {
            show,
            listItem,
            remove,
            edit,
            ...keyValue()
        }
    }
})
</script>

<style scoped>

</style>