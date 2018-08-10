const MenuList = [
    {
        title: '首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children:[
            {
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form'
    },
    {
        title: '表格',
        key: '/admin/table'
    },
    {
        title: '富文本',
        key: '/admin/textarea'
    }
    
]

export default MenuList;