<template>
    <div
        class='layout-login'
        @keyup='enterSubmit'
    >
        <el-form
            ref='ruleForm'
            label-position='right'
            label-width='80px'
            :model='form'
            :rules='rules'
        >
            <el-form-item
                label='用户名'
                prop='name'
            >
                <el-input v-model='form.name' />
            </el-form-item>
            <el-form-item
                label='密码'
                prop='pwd'
            >
                <el-input
                    v-model='form.pwd'
                    type='password'
                    autocomplete='off'
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type='primary'
                    @click='onSubmit'
                >
                    登录
                </el-button>
                <el-button @click='resetFields(ruleForm)'>
                    重置
                </el-button>
            </el-form-item>
            <el-form-item>
                <p class='leading-5'>
                    账号: admin 密码: admin
                </p>
                <p class='leading-5'>
                    账号: dev 密码: dev
                </p>
                <p class='leading-5'>
                    账号: test 密码: test
                </p>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { store } from '/@/store/index'
import { ElNotification } from 'element-plus'
import { validate, resetFields } from '/@/utils/formExtend'

const formRender = () => {
    let form = reactive({
        name: 'admin',
        pwd: 'admin'
    })
    const ruleForm = ref(null)
    const enterSubmit = (e:KeyboardEvent) => {
        if(e.key === 'Enter') {
            onSubmit()
        }
    }
    const onSubmit = async() => {
        let { name, pwd } = form
        if(!await validate(ruleForm)) return
        await store.dispatch('layout/login', { username: name, password: pwd })
        ElNotification({
            title: '欢迎',
            message: '欢迎回来',
            type: 'success'
        })
    }
    const rules = reactive({
        name: [
            { validator: (rule: any, value: any, callback: (arg0?: Error|undefined) => void) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'))
                }
                callback()
            }, trigger: 'blur' 
            }
        ],
        pwd: [
            { validator: (rule: any, value: any, callback: (arg0?: Error|undefined) => void) => {
                if (!value) {
                    return callback(new Error('密码不能为空'))
                }
                callback()
            }, trigger: 'blur' 
            }
        ]
    })
    return {
        form, 
        onSubmit,
        enterSubmit,
        rules,
        resetFields,
        ruleForm
    }
}
export default defineComponent({
    name: 'Login',
    setup() {
        
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            ...formRender()
        }
    }
})
</script>

<style scoped>
.layout-login {
    padding-top: 200px;
    width: 400px;
    margin: 0 auto;
}
</style>