import { NavItem } from './nav-item';


export const lemonMenu: NavItem [] =  [
    { 
      displayName: 'Manager',
      iconName: 'supervisor_account',
      children: [
         {
            displayName:'사용자',
            iconName: 'face',
            route:'/home/lemon/users'
         },
         {
          displayName:'레시피',
          iconName: 'restaurant_menu',
          route:'/home/lemon/receipts'           
         }
      ]
    },
    {
      displayName: 'Inventory',
      iconName: 'edit',
      children: [
        {
          displayName:'Stock Entry',
          iconName: 'layers',
          route:'/home/lemon/inventory/stockEntry'          
        },
        {
          displayName:'Products',
          iconName: 'library_books',
          route:'/home/lemon/inventory/products'    
        },
        {
          displayName:'Categories',
          iconName: 'category',
          route:'/home/lemon/inventory/categories'    
        },
      ]     
    },
    {
      displayName: 'POS',
      iconName: 'person_add',
      children: [
         { 
           displayName:'POS' ,
           iconName: 'rate_review',
           route: '/home/lemon/pos'
        }
      ]
           
    },   
  ];

  export const homeMenu: NavItem[]  = [
    { 
      displayName: 'Home',
      iconName: 'library_books',
      children: [
         {
            displayName:'콤포넌트',
            iconName: 'library_books',
            route:'/mininus'
         },
         {
          displayName:'운동',
          iconName: 'question_answer',
          route:'/fitness'           
         }
      ]
    },
    {
      displayName: '로그아웃',
      iconName: 'person_add',
      route: '/login'     
    },   
  ];