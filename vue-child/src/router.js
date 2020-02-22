import Vue from 'vue';
import VueRouter from 'vue-router';
import Supplier from './Supplier';
import SupplierList from './SupplierList';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/supplier',
      component: Supplier,
    },
    {
      path: '/supplier/others',
      component: SupplierList,
    }
  ]
});


export default router;