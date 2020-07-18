import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { exams } from './samples';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-spacewalk',
  templateUrl: './spacewalk.component.html',
  styleUrls: ['./spacewalk.component.scss'],
})
export class SpaceWalkComponent {

  private currentExIndex = -1;
  constructor(
    private router: Router,
  ) { }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log('spacewalk: ', event);
    let destination = '';
    const lastExIndex = exams.length - 1;
    switch (event.code) {
      case 'Backquote':
        destination = 'welcome';
        this.currentExIndex = -1;
        break;

      case 'Backslash':
        destination = 'menu';
        this.currentExIndex = -1;
        break;

      case 'BracketRight':
        this.currentExIndex = this.currentExIndex < lastExIndex ? this.currentExIndex + 1 : lastExIndex;
        destination = exams[this.currentExIndex].path;
        break;

      case 'BracketLeft':
        this.currentExIndex = this.currentExIndex > 0 ? this.currentExIndex - 1 : 0;
        destination = exams[this.currentExIndex].path;
        break;
    }

    if (destination) {
      this.router.navigate([destination]);
    }
  }

}
