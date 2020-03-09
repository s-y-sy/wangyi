import Homepage from '../pages/Homepage/Homepage.vue'
import Classification from '../pages/Classification/Classification.vue'
import Buy from '../pages/Buy/Buy.vue'
import Person from '../pages/Person/Person.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Tuijian from '../pages/Classification/Tuijian/Tuijian.vue'

export default [
  {
    path:'/homepage',
    component:Homepage 
  },
  {
    path:'/classification',
    component: Classification,
    children: [
      {
        path:'tuijian',
        component: Tuijian
      },
      {
        path:'/classification',
        redirect: '/classification/tuijian'
      }
    ]
    
  },
  {
    path:'/buy',
    component: Buy
  },
  {
    path:'/prson',
    component: Person
  },
  {
    path:'/shopping',
    component: Shopping
  },
  
  {
    path:'/homepage',
    redirect:Homepage
  }

  ]