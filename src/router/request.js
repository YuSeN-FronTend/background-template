import router from "./index";
import store from '@/store/index.js'
console.log(router);

router.beforeEach((to,from,next)=>{
    console.log(to,from);
    // 判断是否存在该路由
    let name = `"name":"${to.name}"`
    // console.log(name, JSON.stringify(router.options.routes));
    if (JSON.stringify(router.options.routes).includes(name)){
        // console.log('存在to的路由');
        next()
    } else {
        console.log(JSON.stringify(store.state.dynamicRoutes),name);
        if (JSON.stringify(store.state.dynamicRoutes)) {
            for (let each of store.state.dynamicRoutes) {
                console.log(each);
                router.addRoute('layout', each)
            }
            next()
        }
        next('/404')
        // if (JSON.stringify(store.state.dynamicRoutes).indexOf()) 
    }
    // if(){}
    next()
})