import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// route-level code splitting
const itemList = () => import('../views/itemList.vue');
const item = () => import('../views/item.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { name: 'books', path: '/books', component: itemList, meta: { title: "books" } },
      { name: 'book', path: '/books/:id', component: item, meta: { title: "book" } }
    ]
  })
}
