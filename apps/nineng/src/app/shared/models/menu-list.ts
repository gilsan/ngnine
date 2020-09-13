import { NavItem } from './nav-item';



export const openLayerMenu: NavItem[] = [
  {
    displayName: '예제1',
    iconName: 'supervisor_account',
    children: [
      {
        displayName: 'Accessible Map',
        iconName: 'face',
        route: '/home/lemon/accessible'
      },
      {
        displayName: 'Advanced Mapbox Vector Tile',
        iconName: 'restaurant_menu',
        route: '/home/lemon/mapbox'
      }
    ]
  },
];

export const olMenu: NavItem[] = [
  {
    displayName: '예제1',
    iconName: 'supervisor_account',
    children: [
      {
        displayName: 'Accessible Map',
        iconName: 'face',
        route: '/maps/accessible'
      },
      {
        displayName: 'Advanced Mapbox Vector Tile',
        iconName: 'restaurant_menu',
        route: '/maps/mapbox'
      }
    ]
  },
];



export const lemonMenu: NavItem[] = [
  {
    displayName: '예제1',
    iconName: 'supervisor_account',
    children: [
      {
        displayName: 'Accessible Map',
        iconName: 'face',
        route: '/home/lemon/accessible'
      },
      {
        displayName: 'Advanced Mapbox Vector Tile',
        iconName: 'restaurant_menu',
        route: '/home/lemon/mapbox'
      }
    ]
  },
  {
    displayName: '예제2',
    iconName: 'edit',
    children: [
      {
        displayName: 'Stock Entry',
        iconName: 'layers',
        route: '/home/lemon/inventory/stockEntry'
      },
      {
        displayName: 'Products',
        iconName: 'library_books',
        route: '/home/lemon/inventory/products'
      },
      {
        displayName: 'Categories',
        iconName: 'category',
        route: '/home/lemon/inventory/categories'
      },
    ]
  },
  {
    displayName: '예제3',
    iconName: 'person_add',
    children: [
      {
        displayName: 'POS',
        iconName: 'rate_review',
        route: '/home/lemon/pos'
      }
    ]

  },
];

export const homeMenu: NavItem[] = [
  {
    displayName: 'Home',
    iconName: 'library_books',
    children: [
      {
        displayName: '콤포넌트',
        iconName: 'library_books',
        route: '/mininus'
      },
      {
        displayName: '운동',
        iconName: 'question_answer',
        route: '/fitness'
      }
    ]
  },
  {
    displayName: '로그아웃',
    iconName: 'person_add',
    route: '/login'
  },
];