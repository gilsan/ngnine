import { animate, state, style, transition,trigger }  from '@angular/animations';
 

export const expandableTableRowanimation = trigger('expandableRow', [
     state('collapsed, void', style({
         height: '0px',
         visibility: 'hidden'
     })),
     state('expanded, void', style({
         'min-height': '48px',
         height: '*',
         visibility: 'visible'
     })),
     transition(
         'expanded <=> collapsed, void <=> *',
         animate('225ms')
     ),
]);
