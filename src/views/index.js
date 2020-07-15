// import Home from './home/Home'
import loadable from '@loadable/component'
import Detail from './home/Detail'
import Good from './good/good'
// 动态加载
const Home = loadable(()=>import('./home/Home'))
const HomeDetail=loadable(()=>import('./home/Detail'))
const Todo = loadable(()=>import('./todo/Todo'))
export default[
    {
        id:1,
        path:'/home',
        component:Home,
        title:'首页',
        children:[
            {
                id:101,
                path:'/home/detail',
                component:HomeDetail,
                title:'详情'
            }
        ]
    },
    {
        id:2,
        path:'/good',
        component:Good,
        title:'商品',

    },
    {
        id:3,
        path:'/todo',
        component:Todo,
        title:'todolist'
    }
]