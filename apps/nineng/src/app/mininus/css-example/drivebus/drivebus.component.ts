import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-drivebus',
  templateUrl: './drivebus.component.html',
  styleUrls: ['./drivebus.component.scss']
})
export class DrivebusComponent implements OnInit {

  moving = true;
  flag = true;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  onKeypress(e: KeyboardEvent) {

    if (e.which === 13) {
      this.moving = !this.moving;
    }
  }

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    this.flag = !this.flag;
  }


  toggleRight() {
    // if (this.moving) {
    //   return { moveRight: true };
    // }
    // return { moveRight: false };
    return this.moving ? { moveRight: true } : { moveRight: false };
  }

  toggleCar() {
    // if (this.moving) {
    //   return { moveCar: true };
    // }
    // return { moveCar: false };

    return this.moving ? { moveCar: true } : { moveCar: false };
  }

  getImage() {
    // if (this.flag) return "assets/drivecar/Img_06.png";
    // return "assets/drivecar/Img_05.png";

    return this.flag ? "assets/drivecar/Img_06.png" : "assets/drivecar/Img_05.png";
  }


}
