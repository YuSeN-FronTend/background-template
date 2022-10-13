const router = [
    {
        path: '/test1',
        name: 'test1',
        mate: {
            hidden: false,
            icon: 'widgets',
            color: 'green',
            fPath: null
        },
        component: '@/views/test1.vue',
    },    
    {
        path: '/test2',
        name: 'test2',
        mate: {
            hidden: false,
            icon: 'view_carousel',
            color: 'brown',
            fPath: null
        },
        component: '@/views/test2.vue',
    },
    {
        path: '/test3',
        name: 'test3',
        mate: {
            hidden: false,
            icon: 'local_mall',
            color: 'purple',
            fPath: null
        },
        component: '@/views/test3.vue',
    },
    {
        path: '/test4',
        name: 'test4',
        mate: {
            hidden: false,
            fPath: '/test2'
        },
        component: '@/views/test4.vue',
    },
]

export default router;