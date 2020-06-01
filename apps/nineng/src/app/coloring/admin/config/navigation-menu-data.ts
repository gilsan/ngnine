import { INavigationGroup } from '../domain/navigation-group';

// TODO: Split by modules

export const NAVIGATION_MENU_DATA: INavigationGroup[] = [
  {
      icon: 'settings',
      name: '컬러링설정',
      items: [
        {
          routerLink: '/coloring/admin/coloring-list',
          name: '컬러링  설정현황',
       },
        {
          routerLink: '/coloring/admin/calendar-header',
          name: '날자별 설정',
       }, {
          routerLink: '/coloring/admin/weekday',
          name: '요일별 설정',
       },  {
          routerLink: '/coloring/admin/mgn/depart',
          name: '부서별 설정',
       }, {
          routerLink: '/coloring/admin/mgn/library',
          name: '휴관일 설정',
       },
    ],
  }, {
    icon: 'queue_music',
    name: '음원관리',
    items: [
      {
        routerLink: 'mgn/basic',
        name: '컬러링음원 관리',
      },
      ],
  }, {
      icon: 'mic',
      name: '녹취관리',
      items: [
        {
          routerLink: '/coloring/admin/record/receive',
          name: '수신 녹취번호 등록',
        },
        {
          routerLink: '/coloring/admin/record/send',
          name: '발신녹취번호 등록',
        },
        {
          routerLink: '/coloring/admin/record/mgn',
          name: '녹취음원관리',
        },
      ],
  }, {
     icon: 'bar_chart',
     name: '통계관리',
     items: [
       {
        routerLink: '/coloring/admin/statics/calls',
        name: '호통계',
       },
     ],
  },

];
