export default [
  {
    path: '/shop',
    name: 'Shop',
    component: () =>
      import(/* webpackChunkName: "shop" */ '../views/Shop/Index.vue'),
  },
]
