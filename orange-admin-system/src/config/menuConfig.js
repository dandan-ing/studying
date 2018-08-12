const MenuList = [
    {
        title: '首页',
        key: '/',
        icon: 'home'
    },
    {
        title:'布局组件',
        key: '/admin/layout',
        icon: 'layout',
        children:[
            {
                title: '布局',
                key: '/admin/layout/layout'
            },
            {
                title: '栅格',
                key: '/admin/layout/grid'
            }
        ]
    },
    {
        title: '导航',
        key: '/admin/nav',
        icon: 'environment',
        children: [
            {
                title: 'tabs标签页',
                key: '/admin/nav/tabs'
            },
            {
                title: '菜单',
                key: '/admin/nav/menu'
            },
            {
                title: '面包屑',
                key: '/admin/nav/breadcrumb'
            },
            {
                title: '下拉框',
                key: '/admin/nav/dropdown'
            },
            {
                title: '步骤',
                key: '/admin/nav/step'
            }
        ]
    },
    {
        title: '常用组件',
        key: '/admin/ui',
        icon: 'book',
        children:[
            {
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '通知弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings'
            },
            {
                title: '通知提醒框',
                key: '/admin/ui/notice'
            },
            {
                title: '全局提示',
                key: '/admin/ui/message'
            },
            {
                title: '图片画廊',
                key: '/admin/ui/gallery'
            },
            {
                title: '轮播',
                key: '/admin/ui/carousel'
            },
            {
                title: '图标',
                key: '/admin/ui/icons'
            },
            {
                title: '颜色',
                key: '/admin/ui/colors'
            },
            {
                title: '对话框',
                key: '/admin/ui/dialog'
            },
            {
                title: '提示框',
                key: '/admin/ui/tooltip'
            },
            {
                title: '面板',
                key: '/admin/ui/card'
            },
            {
                title: '折叠面板',
                key: '/admin/ui/collapse'
            },
            {
                title: '滑块',
                key: '/admin/ui/slider'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        icon: 'form',
        children:[
            {
                title: '登录',
                key: '/admin/form/login'
            },
            {
                title: '注册',
                key: '/admin/form/register'
            },
            {
                title: '表单元素',
                key: '/admin/form/formElements'
            },
            {
                title: '级联选择器',
                key: '/admin/form/cascader'
            },
            {
                title: '穿梭框',
                key: '/admin/form/transfer'
            },
            {
                title: '表单',
                key: '/admin/form/form'
            },
            {
                title: '平分',
                key: '/admin/form/rate'
            }
        ]
    },
    {
        title: '数据',
        key: '/admin/data',
        icon: 'database',
        children:[
            {
                title: '表格',
                key: '/admin/data/table'
            },
            {
                title: '分页',
                key: '/admin/data/pagination'
            },
            {
                title: '标签',
                key: '/admin/data/tag'
            },
            {
                title: '进度条',
                key: '/admin/data/progress'
            },
            
            {
                title: '标记',
                key: '/admin/data/badge'
            },
            {
                title: '树',
                key: '/admin/data/tree'
            },
        ]
    },
    {
        title: '动画',
        key: '/admin/animate',
        icon: 'meh-o',
        children: [
            {
                title: '动画效果',
                key: '/admin/animate/animateCss'
            }
        ]
    },
    {
        title: '图表',
        key: '/admin/chart',
        icon: 'area-chart',
        children: [
            {
                title: '柱状图',
                key: '/admin/chart/barchart'
            },
            {
                title: '饼图',
                key: '/admin/chart/piechart'
            },
            {
                title: '饼图',
                key: '/admin/chart/linechart'
            }
        ]
    },
    {
        title: '业务组件',
        key: '/admin/public',
        icon: 'profile',
        children: [
            {
                title: '登录',
                key: '/admin/public/loginForm'
            },
            {
                title: '404',
                key: '/admin/public/404'
            },
            {
                title: '富文本编辑器',
                key: '/admin/public/richTextEditor'
            },
            {
                title: '复制URL&刷新',
                key: '/admin/public/copyUrlAndRefresh'
            },
            {
                title: '动态控制表格',
                key: '/admin/public/dynamicTable'
            },
            {
                title: '高级搜索',
                key: '/admin/public/advancedSearch'
            }
        ]
    },
    {
        title: '订单管理',
        key: '/admin/order',
        icon: '',
    }
    
]

export default MenuList;