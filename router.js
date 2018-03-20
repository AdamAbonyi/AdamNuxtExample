import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index'
import technicals from '~/pages/technicals'
import technicalsHome from '~/pages/technicals/index'
import technicalsId from '~/pages/technicals/_id'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: index
      },
      {
        path: '/technicals',
        component: technicals,
        children: [{
            path: '',
            component: technicalshome
          }
        ]
      },
      {
        path: '/technicals/:id',
        component: technicals,
        children: [
          {
            path: '',
            component: technicalsId
          }
        ]
      }
    ]
  })
}
