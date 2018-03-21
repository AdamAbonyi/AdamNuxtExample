import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index'
import technicals from '~/pages/technicals'
import technicalsId from '~/pages/technicals/_id'
import events from '~/pages/events'
import support from '~/pages/support'

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
      },
      {
        path: '/t/:id',
        component: technicalsId,
      },
      {
        path: '/events',
        component: events,
      },
      {
        path: '/support',
        component: support,
      }
    ]
  })
}
