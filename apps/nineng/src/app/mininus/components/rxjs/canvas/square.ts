
export class Square {
   private color ='red';
   private x = 0;
   private y = 0;
   private z = 20;
   
   constructor(
       private ctx: CanvasRenderingContext2D
   ) {}

   moveRight() {
       this.x++;
       this.draw(this.x, this.y, this.z);
   }

   draw(x:number, y: number, z:number) {
       this.ctx.fillStyle= this.color;
       this.ctx.fillRect(z * x, z * y, z, z);
   }

   move(y:number, z: number) {
    const max = this.ctx.canvas.width / z;   
    const canvas = this.ctx.canvas;
    
    let x = 0;
  
    setInterval(()=> {
      this.ctx.clearRect(0,0,canvas.width,canvas.height);
        this.draw(x,y,z);
        x++;
      if (x > max) {
        clearInterval();
      }       
     },200);
     
  }
   



}