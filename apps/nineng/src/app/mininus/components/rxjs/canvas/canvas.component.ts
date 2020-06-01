import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Square } from './square';
 

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, OnDestroy {

  @ViewChild('canvas', {static: true})
   canvas: ElementRef<HTMLCanvasElement>;

   private ctx: CanvasRenderingContext2D;
   requestId;
   intervalId;
   squares: Square[] =[];

   constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ngZone.runOutsideAngular(()=> this.tick());
    this.intervalId = setInterval(() => {
       this.tick();
    },200);
    
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    cancelAnimationFrame(this.requestId);
  }

  tick() {
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
    this.squares.forEach((square:Square) => {
        square.moveRight();
    });
     this.requestId = requestAnimationFrame(()=> this.tick);
  }

  animate() {
      const square = new Square(this.ctx);
      this.squares = this.squares.concat(square);    
    //  console.log(this.squares); 
  }

 

}
