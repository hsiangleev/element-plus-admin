let t=document.createElement("style");t.innerHTML=".card-list .el-card__header{padding:10px 15px}.card-list .el-button{padding:4px 6px;border-radius:3px}.card-list-body[data-v-37fc2fb5]{list-style:square}.card-list-body>li[data-v-37fc2fb5]{list-style:square;display:flex;padding:3px 0;align-items:center;justify-content:space-between}.card-list-body>li>.card-list-mark[data-v-37fc2fb5]{color:#888}.card-list-body>li>.card-list-text[data-v-37fc2fb5]{padding-right:10px;color:#666}.card-list-body>li>.card-list-text>a[data-v-37fc2fb5]:hover{color:#409eff}.card-list-body>li>.card-list-text.nowrap[data-v-37fc2fb5]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-list-body>li>.card-list-text.wrap[data-v-37fc2fb5]{display:flex;align-items:center}.card-list-body>li>.card-list-text>span.card-list-item-circle[data-v-37fc2fb5]{display:inline-block;width:5px;height:5px;border-radius:50%;background-color:#666;margin-right:10px}.card-list-body>li>.card-list-text.nowrap>span.card-list-item-circle[data-v-37fc2fb5]{transform:translateY(-50%)}.card-list-body>li>.card-list-text.wrap>span.card-list-item-circle[data-v-37fc2fb5]{min-width:5px;min-height:5px;max-width:5px;max-height:5px}.card-list-item,.card-list-item .el-form-item__content,.card-list-item .el-input .el-input__inner{height:28px;line-height:28px}.card-list-item .el-form-item__content{font-size:.875rem}",document.head.appendChild(t);import{d as e,m as l,A as a,B as s,b as i,o as r,e as d,g as o,I as n,t as c,H as p,F as u,i as f,s as m,j as y,x as h,f as x,r as w}from"./index.5bb5344b.js";var b=e({name:"CardList",props:{type:{type:String,default:"default",validator:function(t){return-1!==["default","KeyValue"].indexOf(t)}},ref:{type:Object,default:l(null)},form:{type:Object,default:()=>({})},rules:{type:Object,default:()=>({})},listItem:{type:Array,default:()=>[]},title:{type:String,default:"标题"},showHeader:{type:Boolean,default:!1},isNowrap:{type:Boolean,default:!0},showListstyle:{type:Boolean,default:!0}},emits:["update:show"],setup:(t,e)=>({slots:e.slots})});const v=h("data-v-37fc2fb5");a("data-v-37fc2fb5");const _={class:"card-list mb-2"},g={class:"flex justify-between items-center"},k={key:0,class:"card-list-body flex flex-col text-sm"},C={key:0,class:"card-list-item-circle"},I={key:0,class:"card-list-mark"};s();const L=v(((t,e,l,a,s,h)=>{const x=i("el-row"),w=i("el-form"),b=i("el-card");return r(),d("div",_,[o(b,{class:"box-card",shadow:"hover"},n({default:v((()=>["default"===t.type?(r(),d("ul",k,[(r(!0),d(u,null,f(t.listItem,((e,l)=>(r(),d("li",{key:l},[o("div",{class:{"card-list-text":!0,nowrap:t.isNowrap,wrap:!t.isNowrap}},[t.showListstyle?(r(),d("span",C)):m("",!0),e.url?(r(),d("a",{key:1,href:e.url,target:e.target||"_self",class:{nowrap:t.isNowrap,wrap:!t.isNowrap}},c(e.text),11,["href","target"])):(r(),d(u,{key:2},[y(c(e.text),1)],64))],2),e.mark?(r(),d("div",I,c(e.mark),1)):m("",!0)])))),128))])):m("",!0),o(w,{ref:t.ref,class:"card-list-form",model:t.form,rules:t.rules},{default:v((()=>[o(x,{gutter:15},{default:v((()=>[p(t.$slots,"KeyValue")])),_:3})])),_:1},8,["model","rules"])])),_:2},[t.showHeader?{name:"header",fn:v((()=>[o("div",g,[o("span",null,c(t.title),1),p(t.$slots,"btn")])]))}:void 0]),1024)])}));b.render=L,b.__scopeId="data-v-37fc2fb5";var j=e({name:"CardListItem",props:{width:{type:String,default:"80px"},isRequire:{type:Boolean,default:!1},prop:{type:String,default:""}},emits:["update:show"],setup:(t,e)=>({slots:e.slots})});const A={class:"card-list-item flex mb-5 text-sm"},V={key:0,class:"text-red-600 select-none"},q=o("span",null,":",-1);j.render=function(t,e,l,a,s,n){const c=i("el-form-item"),u=i("el-col");return r(),d(u,{xs:24,sm:12,xl:8},{default:x((()=>[o("div",A,[o("div",{class:"text-right pr-3",style:{width:t.width}},[t.isRequire?(r(),d("span",V,"*")):m("",!0),p(t.$slots,"key"),q],4),o("div",{class:["flex-1 font-semibold",{truncate:!t.prop}]},[t.prop?(r(),d(c,{key:0,prop:t.prop},{default:x((()=>[p(t.$slots,"value")])),_:3},8,["prop"])):p(t.$slots,"value",{key:1})],2)])])),_:3})};const B=()=>{const t=w({Amt:""}),e=w({Amt:[{required:!0,message:"请输入申报金额",trigger:"blur"}]}),a=l(null);return{form:t,rules:e,submit:async()=>{await async function(t){return new Promise((e=>t.value.ref.value.validate((t=>e(t)))))}(a)&&console.log(t)},refForm:a}};var N=e({name:"CardListTest",components:{CardList:b,CardListItem:j},setup:()=>({show:l(!1),listItem:l([{text:"标题标题标题标题标题标题标题标题标题标题",mark:"2020/12/21",url:"http://baidu.com",target:"_blank"},{text:"标题标题标题标题标题标题标题标题标题标题",mark:"2020/12/21"},{text:"标题标题标题标题标题标题标题标题标题标题",mark:"2020/12/21"}]),remove:t=>console.log(t),edit:t=>console.log(t),...B()})});const $=h("data-v-1288c5e4");a("data-v-1288c5e4");const H={class:"content"},K=y(" 删除 "),O=y(" 编辑 "),S=y(" 提交 "),F=y(" 申请单号 "),R=y(" 2020001686 "),T=y(" 项目编码 "),z=y(" DC2000000373 "),D=y(" 申报金额 "),E=y(" 项目名称 "),M=o("span",null,"2020年广西一流学科建设项目（化学）",-1);s();const P=$(((t,e,l,a,s,n)=>{const c=i("card-list"),p=i("el-col"),u=i("el-button"),f=i("el-button-group"),m=i("card-list-item"),y=i("el-input"),h=i("el-row");return r(),d("div",H,[o(h,{gutter:15,class:"clear-both"},{default:$((()=>[o(p,{span:12},{default:$((()=>[o(c,{"list-item":t.listItem,"show-header":!1,"is-nowrap":!0,"show-liststyle":!1},null,8,["list-item"])])),_:1}),o(p,{span:12},{default:$((()=>[o(c,{"list-item":t.listItem,"show-header":!1,"is-nowrap":!0,"show-liststyle":!0},null,8,["list-item"])])),_:1}),o(p,{span:12},{default:$((()=>[o(c,{title:"选择页","list-item":t.listItem,"show-header":!0,"is-nowrap":!0,"show-liststyle":!0},null,8,["list-item"])])),_:1}),o(p,{span:12},{default:$((()=>[o(c,{title:"选择页","list-item":t.listItem,"show-header":!0,"is-nowrap":!0,"show-liststyle":!0},{btn:$((()=>[o(f,null,{default:$((()=>[o(u,{icon:"el-icon-delete",onClick:t.remove},{default:$((()=>[K])),_:1},8,["onClick"]),o(u,{icon:"el-icon-edit",onClick:t.edit},{default:$((()=>[O])),_:1},8,["onClick"])])),_:1})])),_:1},8,["list-item"])])),_:1}),o(p,{span:24},{default:$((()=>[o(c,{ref:e=>{t.refForm=e},type:"KeyValue","show-header":!0,form:t.form,rules:t.rules},{btn:$((()=>[o(f,null,{default:$((()=>[o(u,{icon:"el-icon-edit",onClick:t.submit},{default:$((()=>[S])),_:1},8,["onClick"])])),_:1})])),KeyValue:$((()=>[o(m,{width:"100px"},{key:$((()=>[F])),value:$((()=>[R])),_:1}),o(m,{width:"100px"},{key:$((()=>[T])),value:$((()=>[z])),_:1}),o(m,{width:"100px","is-require":!0,prop:"Amt"},{key:$((()=>[D])),value:$((()=>[o(y,{modelValue:t.form.Amt,"onUpdate:modelValue":e[1]||(e[1]=e=>t.form.Amt=e)},null,8,["modelValue"])])),_:1}),o(m,{width:"100px"},{key:$((()=>[E])),value:$((()=>[M])),_:1})])),_:1},8,["form","rules"])])),_:1})])),_:1})])}));N.render=P,N.__scopeId="data-v-1288c5e4";export default N;