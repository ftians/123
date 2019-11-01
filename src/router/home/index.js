export default{
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home'),
    children:[{
        path:"chengshi",
        component:()=>import('@/components/Chengshi')
    },{
        path:"jjshangying",
        component:()=>import('@/components/Jjshangying')
    },{
        path:"zzshangying",
        component:()=>import('@/components/Zzshangying')
    },{
        path:"sousuo",
        component:()=>import('@/components/Sousuo')
    }]
}