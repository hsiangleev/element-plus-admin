<template>
    <div
        class='layout-navbar-search hidden-xs-only cursor-pointer flex flex-center px-2'
        :class='{"open": isShow}'
    >
        <svg-icon
            class-name='svg-icon'
            icon-class='svg-search'
            @click.stop='changeStatus'
        />
        <div class='layout-navbar-search-select'>
            <el-select
                ref='elSelect'
                v-model='href'
                filterable
                placeholder='search'
                remote
                :remote-method='searchText'
                @change='changeRoute'
            >
                <el-option
                    v-for='item in searchList'
                    :key='item.path'
                    :label='item.searchLabel'
                    :value='item.path'
                />
            </el-select>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import { useStore } from '/@/store/index'
import { IMenubarList } from '/@/type/store/layout'
import { useRouter } from 'vue-router'

interface ISearchList extends IMenubarList{
    searchLabel: string
}
// 搜索查询
const search = (searchList:ISearchList[], menuList: IMenubarList[]) => {
    const f = (query: string, list:IMenubarList[], text: string) => {
        list.forEach(v => {
            if(v.meta.title.toLocaleLowerCase().includes(query)) {
                const obj = Object.assign({}, v, { searchLabel: text + v.meta.title })
                searchList.push(obj)
            }
            if(v.children && v.children.length > 0) {
                f(query, v.children, `${text + v.meta.title} > `)
            }
        })
    }
    const searchText = (query: string) => {
        searchList.splice(0, searchList.length)
        query && f(query, menuList, '')
    }
    return { searchText }
}
// search显示隐藏状态
const changeSearchStatus = (searchList:ISearchList[]) => {
    const router = useRouter()
    const href = ref('')
    const isShow = ref(false)
    const elSelect = ref()
    const changeStatus = () => {
        isShow.value = !isShow.value
        if(isShow.value && elSelect.value) {
            elSelect.value.focus()
        }
    }

    const hideSearch = () => {
        href.value = ''
        searchList.splice(0, searchList.length)
        isShow.value = false
    }

    watch(isShow, (newValue) => {
        if(newValue) {
            document.body.addEventListener('click', hideSearch)
        }else{
            document.body.removeEventListener('click', hideSearch)
        }
    })

    const changeRoute = () => {
        router.push({ path: href.value })
        hideSearch()
    }

    return {
        href,
        changeRoute,
        changeStatus,
        isShow,
        elSelect,
        hideSearch
    }
}

export default defineComponent({
    name: 'Search',
    setup() {
        const store = useStore()
        const searchList:ISearchList[] = []
        const { menuList } = store.state.layout.menubar
        

        return {
            searchList,
            ...search(searchList, menuList),
            ...changeSearchStatus(searchList)
        }
    }
})
</script>

<style lang='postcss' scoped>
    ::v-deep(.el-input__inner) {
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }

    ::v-deep(.el-select__caret) {
        display: none;
    }

    .layout-navbar-search {
        .layout-navbar-search-select {
            transition: width 0.2s;
            width: 0;
            overflow: hidden;
        }

        &.open {
            .layout-navbar-search-select {
                width: 210px;
            }
        }
    }
</style>