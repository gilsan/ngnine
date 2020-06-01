import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[menuItem]'
})
export class MenuItemDirective {

    @HostBinding('class.menu-item') item = true;

    @Input() name: string;
    @Output() selected: EventEmitter<string> = new EventEmitter<string>();
    @HostListener('click', ['$event'])
     select() {
         this.selected.emit(this.name);
     }
     
}