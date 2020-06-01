import {AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit} from '@angular/core';
import {faCreditCard, faEnvelope, faLock, faStar, faWifi} from "@fortawesome/free-solid-svg-icons";

import {InputRefDirective} from "../directives/input-ref.directive";

@Component({

  selector: 'app-au-input',
  templateUrl: './au-input.component.html',
  styleUrls: ['./au-input.component.scss']
})
export class AuInputComponent implements OnInit, AfterContentInit {

  @Input() icon: any;
  public fontawesome ;
  constructor() { }

  @ContentChild(InputRefDirective)
  input: InputRefDirective;


  ngOnInit() {
    
    if ( this.icon === 'envelope') {
      this.fontawesome = faEnvelope
    } else if(this.icon === 'star') {
      this.fontawesome = faStar;
    } else if(this.icon === 'wifi') {
      this.fontawesome = faWifi;
    } else if(this.icon === 'lock') {
      this.fontawesome = faLock;
    } else if(this.icon === 'card') {
      this.fontawesome = faCreditCard;
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngAfterContentInit() {
    console.log('input', this.input);
  }

  get classes() {
    let cssClasses = {};
    let fas = 'fa-' + this.icon;
    if (this.icon) {     
      cssClasses[fas]= true;
    }
    return cssClasses;
  }

}
