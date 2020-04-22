

import NotFound from 'pages/exception/404'
import User from 'pages/user/Index';
import Index from 'pages/index/Index';


let routes = [
    {
        path: '/home',
        key: "/home",
        icon: "home",
        name: "首页",
        component: Index
    }
]

export default routes