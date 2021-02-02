import theme from '/@/config/theme'
import { ITheme } from '/@/type/config/theme'
export default function(num:number):HTMLStyleElement {
    const themeStyle:ITheme = num >= theme.length ? theme[0] : theme[num]
    
    const themeDom = document.createElement('style')
    themeDom.className = 'layout-theme-setting'
    themeDom.innerText = `
    .layout-sidebar-logo {
        background-color: ${themeStyle.logoBg || themeStyle.sidebarBg};
        color: ${themeStyle.logoColor || themeStyle.sidebarColor};
    }
    .layout-sidebar {
        background-color: ${themeStyle.sidebarBg};
    }
    .layout-sidebar .el-menu {
        background-color: ${themeStyle.sidebarBg};
        border-right: 0;
    }
    .layout-sidebar .el-menu .el-menu {
        background-color: ${themeStyle.sidebarChildrenBg};
    }
    .layout-sidebar .el-submenu__title {
        color: ${themeStyle.sidebarColor};
    }
    .layout-sidebar .el-menu-item {
        color: ${themeStyle.sidebarColor};
    }
    .layout-sidebar .el-menu-item:focus,
    .layout-sidebar .el-menu-item:hover,
    .layout-sidebar .el-submenu__title:hover {
        background-color: transparent;
        color: ${themeStyle.sidebarActiveColor};
    }
    .layout-sidebar .el-menu-item-group__title {
        padding: 0;
    }
    .layout-sidebar .el-submenu.is-active > .el-submenu__title,
    .layout-sidebar .el-submenu.is-active > .el-submenu__title > i {
        color: ${themeStyle.sidebarActiveColor};
    }
    .layout-sidebar .el-menu-item.is-active {
        background-color: ${themeStyle.sidebarActiveBg};
        color: ${themeStyle.sidebarActiveColor};
        border-right: 3px solid ${themeStyle.sidebarActiveBorderRightBG};
    }
    ${(function() {
        let s = ''
        if(themeStyle.navbarBg) {
            s += `.layout-main-navbar {
                background-color: ${themeStyle.navbarBg};
            }`
        }
        if(themeStyle.navbarColor) {
            s += `.layout-main-navbar {
                color: ${themeStyle.navbarColor};
            }
            .layout-main-navbar .el-breadcrumb .el-breadcrumb__inner,
            .layout-main-navbar .el-breadcrumb .el-breadcrumb__separator,
            .layout-main-navbar .el-breadcrumb .el-breadcrumb__inner:hover,
            .layout-main-navbar .el-breadcrumb .el-breadcrumb__separator:hover,
            .layout-main-navbar .el-dropdown {
                color: ${themeStyle.navbarColor};
            }`
        }
        if(themeStyle.tagsBg) {
            s += `.layout-main-tags {
                background-color: ${themeStyle.tagsBg};
            }`
        }
        if(themeStyle.tagsColor) {
            s += `.layout-main-tags {
                color: ${themeStyle.tagsColor};
            }`
        }
        return s
    })()}
    .layout-main-content {
        background-color: ${themeStyle.mainBg};
    }
    .layout-tags-active {
        background-color: ${themeStyle.tagsActiveBg};
        color: ${themeStyle.tagsActiveColor};
    }
    .layout-sidebar-theme > i {
        background-color: ${themeStyle.sidebarActiveBg};
        color: ${themeStyle.sidebarColor};
    }
    `.replace(/\n/g, '').replace(/ {4}/g, '')
    const prevTheme = document.querySelector('style.layout-theme-setting')
    prevTheme && prevTheme.remove()
    document.head.appendChild(themeDom)
    return themeDom
}