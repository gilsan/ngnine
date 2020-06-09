import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-breakout',
  templateUrl: './breakout.component.html',
  styleUrls: ['./breakout.component.scss']
})
export class BreakoutComponent implements OnInit {

  score = 0;
  brickRowCount = 9;
  brickColumnCount = 5;
  canvasWidth = 800;
  canvasHeight = 550;
  ctx: CanvasRenderingContext2D;
  bricks = [];
  isShow = false;

  @ViewChild('board', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  ball = {
    x: this.canvasWidth / 2,
    y: this.canvasHeight / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
  };

  paddle = {
    x: this.canvasWidth / 2 - 40,
    y: this.canvasHeight - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
  };

  brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true,
  };

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.canvas.width = this.canvasWidth;
    this.ctx.canvas.height = this.canvasHeight;
    this.makeBricks();
    this.update();
  }

  // 벽돌 만들기
  makeBricks() {
    for (let i = 0; i < this.brickRowCount; i++) {
      this.bricks[i] = [];
      for (let j = 0; j < this.brickColumnCount; j++) {
        const x = i * (this.brickInfo.w + this.brickInfo.padding) + this.brickInfo.offsetX;
        const y = j * (this.brickInfo.h + this.brickInfo.padding) + this.brickInfo.offsetY;
        this.bricks[i][j] = { x, y, ...this.brickInfo };
      }
    }
  }

  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddle.x, this.paddle.y, this.paddle.w, this.paddle.h);
    this.ctx.fillStyle = '#0095dd';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.size, 0, Math.PI * 2);
    this.ctx.fillStyle = '#0095dd';
    this.ctx.fill();
    this.ctx.closePath();
  }

  // 스코어 만들기
  drawScore() {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(`Score: ${this.score}`, this.canvasWidth - 100, 30);
  }

  // 벽돌 만들기
  drawBricks() {
    this.bricks.forEach((column) => {
      column.forEach((brick) => {
        this.ctx.beginPath();
        this.ctx.rect(brick.x, brick.y, brick.w, brick.h);
        this.ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
        this.ctx.fill();
        this.ctx.closePath();
      });
    });
  }

  // 받침대
  movePaddele() {
    this.paddle.x += this.paddle.dx;
    // 벽에 부딪침
    if (this.paddle.x + this.paddle.w > this.canvasWidth) {
      this.paddle.x = this.canvasHeight - this.paddle.w;
    }

    if (this.paddle.x < 0) {
      this.paddle.x = 0;
    }
  }

  // 공이 벽에 부딪침
  moveBall() {
    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;

    // 벽에 부딪침
    if (this.ball.x + this.ball.size > this.canvasWidth || this.ball.x - this.ball.size < 0) {
      this.ball.dx *= -1;
    }

    if (this.ball.y + this.ball.size > this.canvasHeight || this.ball.y - this.ball.size < 0) {
      this.ball.dy *= -1;
    }
    // 받침대 충돌
    if (
      this.ball.x - this.ball.size > this.paddle.x &&
      this.ball.x + this.ball.size < this.paddle.x + this.paddle.w &&
      this.ball.y + this.ball.size > this.paddle.y
    ) {
      this.ball.dy = -this.ball.speed;
    }

    // 블럭깨기
    this.bricks.forEach((column) => {
      column.forEach((brick) => {
        if (brick.visible) {
          if (
            this.ball.x - this.ball.size > brick.x && // left brick side check
            this.ball.x + this.ball.size < brick.x + brick.w &&  // right brick side check
            this.ball.y + this.ball.size > brick.y &&
            this.ball.y - this.ball.size < brick.y + brick.h
          ) {
            this.ball.dy *= -1;
            brick.visible = false;
            this.increaseScore();
          }
        }
      });
    });

    if (this.ball.y + this.ball.size > this.canvasHeight) {
      this.showAllBricks();
      this.score = 0;
    }
  }

  increaseScore() {
    this.score++;
    if (this.score % (this.brickRowCount * this.brickColumnCount) === 0) {
      this.showAllBricks();
    }
  }

  showAllBricks() {
    this.bricks.forEach((column) => {
      column.forEach((brick) => {
        brick.visible = true;
      });
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.drawBall();
    this.drawPaddle();
    this.drawScore();
    this.drawBricks();
  }

  update() {
    this.movePaddele();
    this.moveBall();
    this.draw();
    requestAnimationFrame(this.update.bind(this));
  }

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === 'Right' || event.key === 'ArrowRight') {
      this.paddle.dx = this.paddle.speed;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
      this.paddle.dx = -this.paddle.speed;
    }
  }

  @HostListener('window: keyup', ['$event'])
  keyUp(event: KeyboardEvent) {
    event.preventDefault();
    if (
      event.key === 'Right' ||
      event.key === 'ArrowRight' ||
      event.key === 'Left' ||
      event.key === 'ArrowLeft'
    ) {
      this.paddle.dx = 0;
    }
  }

  toggle() {
    this.isShow = !this.isShow;
  }
  showRules() {
    if (this.isShow) {
      return { show: true };
    }
    return { show: false };
  }

  testcordi() {
    this.moveBall();
  }

}
