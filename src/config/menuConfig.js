/*
* 这个是左边导航栏的菜单
* */
const menuList = [
    {
        title: 'H5页面管理中心',
        key: '/h5',
        icon: 'table',
        children: [
            // 子菜单列表
            {
                title: '制作H5页面',
                key: '/h5/editor',
                icon: 'bell'
            },
            {
                title: '我的H5',
                key: '/h5/admin',
                icon: 'history'
            }
        ]
    },
    {

        title: '日志查询',
        key: '/logs',
        icon: 'bars',
    },
    {
        title: '后台管理',
        key: '/backManagement',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '用户管理',
                key: '/backManagement/users',
                icon: 'bars'
            },
            {
                title: '角色管理',
                key: '/backManagement/roles',
                icon: 'tool'
            },
            {
                title: '权限管理',
                key: '/backManagement/privileges',
                icon: 'tool'
            },
        ]
    },
]
export default menuList;