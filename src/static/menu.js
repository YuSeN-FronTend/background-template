const router = [
    {
        path: '/test1',
        name: 'test1',
        mate: {
            hidden: false,
            icon: 'widgets',
            color: 'green'
        },
        component: () => import('../views/test1.vue'),
    },
    // {
    //     path: '/test',
    //     name: 'test',
    //     mate: {
    //         hidden: true,
    //         icon: 'layers',
    //         color: 'deep-orange'
    //     },
    //     children: [
    //         {
    //             path: '/dashboard',
    //             name: 'dashboard',
    //             mate: {
    //                 hidden: false,
    //                 icon: 'access_time',
    //             },
    //             children: [

    //             ]
    //         },
    //         {
    //             path: '/personal',
    //             name: 'personal',
    //             mate: {
    //                 hidden: false,
    //                 icon: 'adb'
    //             },
    //             children: [

    //             ]
    //         }
    //     ]
    // },
    
    {
        path: '/test2',
        name: 'test2',
        mate: {
            hidden: false,
            icon: 'view_carousel',
            color: 'brown'
        },
        component: () => import('../views/test2.vue'),
    },
    {
        path: '/test3',
        name: 'test3',
        mate: {
            hidden: false,
            icon: 'local_mall',
            color: 'purple'
        },
        component: () => import('../views/test3.vue'),
    },
]

export default router;