import router from "./index";
import store from '@/store/index.js'

// 路由白名单
let whiteList = ['/login', '/404', '/layout']
router.beforeEach((to,from,next)=>{
    if(whiteList.includes(to.path)) {next()}
    // 判断动态路由是否已添加
    let hasRouter = router.options.routes[2].children.some((each) => each.path == to.path)
    if (store.state.dynamicRoutes.length !== 0 && !hasRouter){
        // 遍历添加动态路由
        for (let eachRoute of store.state.dynamicRoutes){
            // 处理路由懒加载
            let routeItem = {
                ...eachRoute,
                component: resolve => require([`@/${eachRoute.component.slice(2)}`], resolve)
            }
            // 解决routes为[] bug
            router.options.routes[2].children.push(routeItem)
            // 添加动态路由
            router.addRoute('layout', routeItem);
        }
        next(to.fullPath)
    }else{
        next()
    }
})
