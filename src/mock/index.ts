import Mock from 'mockjs'
import { login, setToken, checkToken, getUser, getRoute } from '/@/mock/response'

Mock.mock('/login', 'post', (req) => {
    const { username, password } = JSON.parse(req.body)
    if(login(username, password)){
        return Mock.mock({
            Code: 200,
            Msg: '登陆成功',
            Data: setToken(username)
        })
    }
    return Mock.mock({
        Code: 401,
        Msg: '用户名或密码错误',
        Data: ''
    })
})

Mock.mock('/getUser', 'get', (req) => {
    const { token } = JSON.parse(req.body)
    const userName = checkToken(token)
    if(!userName){
        return Mock.mock({
            Code: 401,
            Msg: '身份认证失败',
            Data: ''
        })
    }
    return Mock.mock({
        Code: 200,
        Msg: '',
        Data: getUser(userName)
    })
})

Mock.mock('/getRoute', 'get', (req) => {
    const { token } = JSON.parse(req.body)
    const userName = checkToken(token)
    if(!userName){
        return Mock.mock({
            Code: 401,
            Msg: '身份认证失败',
            Data: ''
        })
    }
    return Mock.mock({
        Code: 200,
        Data: getRoute(userName),
        Msg: ''
    })
})


Mock.Random.extend({
    tag: function() {
        const tag = ['家', '公司', '学校', '超市']
        return this.pick(tag)
    }
})
const tableList = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|100': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        date: ()=>Mock.Random.date('yyyy-MM-dd'),
        name: ()=>Mock.Random.name(),
        address: ()=>Mock.Random.cparagraph(1),
        tag: ()=>Mock.Random.tag(),
        amt: ()=>Number(Mock.Random.float(-100000,100000).toFixed(2))
    }]
})
Mock.mock('/getTableList', 'get', (req) => {
    const { page, size, tag } = JSON.parse(req.body)
    const data = tag === '所有' ? tableList.list : tableList.list.filter(v=>v.tag === tag)
    return Mock.mock({
        Code: 200,
        Data: {
            data: data.filter((v,i)=>i >= (page - 1) * size && i < page * size),
            total: data.length
        },
        Msg: ''
    })
})