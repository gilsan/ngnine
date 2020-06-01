import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../../material.module';
import { MenuItemDirective } from './menu-item.directive';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuItemDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
    
  ],
  
})
export class CoreModule { }
