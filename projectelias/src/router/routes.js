
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/whycompass',
        component: () => import('pages/WhyCompass.vue')
      },
      {
        path: '/search',
        component: () => import('components/CompassSearch.vue')
      }
    ]
  },
  // {
  //   path: '/dev',
  //   component: () => import('layouts/dev.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index-dev.vue') },
  //     { path: '/search', component: () => import('components/CompassSearch.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
