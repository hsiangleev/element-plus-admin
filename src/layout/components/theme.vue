<template>
    <div>
        <el-color-picker
            v-model='defaultTheme'
            :predefine='["#409EFF", "#1890ff", "#304156","#212121","#11a983", "#13c2c2", "#6959CD", "#f5222d" ]'
            size='mini'
            @change='changeTheme'
        />
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, Ref } from 'vue'
import { version } from 'element-plus'
import { store } from '/@/store/index'

const getTheme = (theme: string, prevTheme: Ref<string>) => {
    const themeCluster = getThemeCluster(theme.substr(1))
    const originalCluster = getThemeCluster(prevTheme.value.substr(1))
    prevTheme.value = theme
    return { themeCluster, originalCluster }
}

const getThemeCluster: (theme: string) => string[] = (theme) => {
    const tintColor = (color: string, tint: number) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        if (tint === 0) return [red, green, blue].join(',')
            
        red += Math.round(tint * (255 - red))
        green += Math.round(tint * (255 - green))
        blue += Math.round(tint * (255 - blue))
        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

    const shadeColor = (color: string, shade: number) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

    const clusters = [theme]
    for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
    }
    clusters.push(shadeColor(theme, 0.1))
    return clusters
}

const getStyleElem: (id: string) => HTMLElement = (id) => {
    let styleTag = document.getElementById(id)
    if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.setAttribute('id', id)
        document.head.appendChild(styleTag)
    }

    return styleTag
}

const getCSSString: (url: string, chalk: Ref<string>) => Promise<void> = (url, chalk) => {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                chalk.value = xhr.responseText.replace(/@font-face{[^}]+}/, '')
                resolve()
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

export default defineComponent({
    name: 'LayoutTheme',
    setup() {
        const { setting } = store.state.layout
        const defaultTheme = ref(setting.color.primary)
        const prevTheme = ref(defaultTheme.value)
        const chalk = ref('')
        const changeTheme = async(theme: string) => {
            const { themeCluster, originalCluster } = getTheme(theme, prevTheme)
            setting.color.primary = `#${themeCluster[0]}`
            if (!chalk.value) {
                const url = `https://unpkg.com/element-plus@${version}/lib/theme-chalk/index.css`
                await getCSSString(url, chalk)
            }
            const systemSetting = document.querySelector('style.layout-side-setting') as HTMLElement
            let systemSettingText = systemSetting.innerText
            originalCluster.forEach((color, index) => {
                chalk.value = chalk.value.replace(new RegExp(color, 'ig'), themeCluster[index])
                systemSettingText = systemSettingText.replace(new RegExp(color, 'ig'), themeCluster[index])
            })
            const styleTag = getStyleElem('chalk-style')
            styleTag.innerText = chalk.value
            systemSetting.innerText = systemSettingText
            localStorage.setItem('setting', JSON.stringify(setting))
        }

        return {
            defaultTheme,
            changeTheme
        }
    }
})
</script>