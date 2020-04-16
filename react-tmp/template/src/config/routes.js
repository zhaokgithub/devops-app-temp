

import NotFound from 'pages/exception/404'
import User from 'pages/user/Index';
import Index from 'pages/index/Index';


let routes = [
    {
        path: '/home',
        key: "home",
        icon: "home",
        name: "首页",
        component: Index
    },
    {
        path: '/user',
        icon: "user",
        key: "user",
        name: "表单",
        component: User
    },
    {
        path: '/flow',
        icon: "user",
        key: "flow",
        name: "流程",
        component: User
    },
    {
        path: '404',
        component: NotFound
    }
]

export default routes