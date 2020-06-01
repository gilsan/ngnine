import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { 
   COLS, BLOCK_SIZE, ROWS, LINES_PER_LEVEL,
   COLORS, KEY, LEVEL, POINTS} 
 from './constants';
import { Piece, IPiece } from './piece.component';
import { GameService } from '../services/game.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('next', { static: true })
  canvasNext: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  ctxNext: CanvasRenderingContext2D;
  board: number[][];
  piece: Piece;
  next: Piece;
  requestId: number;
  time: { start: number; elapsed: number; level: number };
  points: number;
  lines: number;
  level: number;
  moves = {
    [KEY.LEFT]: (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
    [KEY.UP]: (p: IPiece): IPiece => this.service.rotate(p)
  };

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY.ESC) {
      this.gameOver();
    } else if (this.moves[event.keyCode]) {
      event.preventDefault();
      // Get new state
      let p = this.moves[event.keyCode](this.piece);
      if (event.keyCode === KEY.SPACE) {
        // Hard drop
        while (this.service.valid(p, this.board)) {
          this.points += POINTS.HARD_DROP;
          this.piece.move(p);
          p = this.moves[KEY.DOWN](this.piece);
        }
      } else if (this.service.valid(p, this.board)) {
        this.piece.move(p);
        if (event.keyCode === KEY.DOWN) {
          this.points += POINTS.SOFT_DROP;
        }
      }
    }
  }

  constructor(private service: GameService) {}

  ngOnInit() {
    this.initBoard();
    this.initNext();
    this.resetGame();
  }

  initBoard() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    // Scale so we don't need to give size on every draw.
    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  initNext() {
    this.ctxNext = this.canvasNext.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctxNext.canvas.width = 4 * BLOCK_SIZE;
    this.ctxNext.canvas.height = 4 * BLOCK_SIZE;

    this.ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
  }

  play() {
    this.resetGame();
    this.next = new Piece(this.ctx);
    this.piece = new Piece(this.ctx);
    this.next.drawNext(this.ctxNext);
    this.time.start = performance.now();

    // If we have an old game running a game then cancel the old
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }

    this.animate();
  }

  resetGame() {
    this.points = 0;
    this.lines = 0;
    this.level = 0;
    this.board = this.getEmptyBoard();
    this.time = { start: 0, elapsed: 0, level: LEVEL[this.level] };
  }

  animate(now = 0) {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.level) {
      this.time.start = now;
      if (!this.drop()) {
        this.gameOver();
        return;
      }
    }
    this.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.piece.draw();
    this.drawBoard();
  }

  drop(): boolean {
    let p = this.moves[KEY.DOWN](this.piece);
    if (this.service.valid(p, this.board)) {
      this.piece.move(p);
    } else {
      this.freeze();
      this.clearLines();
      if (this.piece.y === 0) {
        // Game over
        return false;
      }
      this.piece = this.next;
      this.next = new Piece(this.ctx);
      this.next.drawNext(this.ctxNext);
    }
    return true;
  }

  clearLines() {
    let lines = 0;
    this.board.forEach((row, y) => {
      if (row.every(value => value !== 0)) {
        lines++;
        this.board.splice(y, 1);
        this.board.unshift(Array(COLS).fill(0));
      }
    });
    if (lines > 0) {
      this.points += this.service.getLinesClearedPoints(lines, this.level);
      this.lines += lines;
      if (this.lines >= LINES_PER_LEVEL) {
        this.level++;
        this.lines -= LINES_PER_LEVEL;
        this.time.level = LEVEL[this.level];
      }
    }
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.board[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
  }

  drawBoard() {
    this.board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  gameOver() {
    cancelAnimationFrame(this.requestId);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', 1.8, 4);
  }

  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }









  /*
  constructor(
     private service: GameService
  ) { }

  @ViewChild('board',{ static: true})
    canvas: ElementRef<HTMLCanvasElement>

  @ViewChild('next', {static: true})
    canvasNext: ElementRef<HTMLCanvasElement>

    ctx:     CanvasRenderingContext2D;
    ctxNext: CanvasRenderingContext2D;
    points: number;
    lines: number;
    level: number;
    board: number[][] ;
    time: {start: number; elapsed: number; level: number};
    piece: Piece;
    next: Piece;
    requestId: number;

  moves = {
    [KEY.LEFT]:(p:IPiece): IPiece =>  ({...p, x:p.x -1}),
    [KEY.RIGHT]:(p:IPiece): IPiece => ({...p, x:p.x + 1}),
    [KEY.DOWN]: (p:IPiece): IPiece => ({...p, y:p.y + 1}),
    [KEY.SPACE]: (p:IPiece): IPiece => ({...p, y:p.y +1}),
    [KEY.UP]: (p:IPiece): IPiece => this.service.rotate(p),
  }

  @HostListener('window:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
      if (this.moves[event.keyCode]) {
        // 키가 존재하면, 버블링 정지
        event.preventDefault();
        // 다음위치 찿듬
        let p = this.moves[event.keyCode](this.piece);
        if (event.keyCode === KEY.SPACE){
           while(this.service.valid(p)) {
             this.points += POINTS.HARD_DROP;
             this.piece.move(p);
             p = this.moves[KEY.DOWN](this.piece);
           }
        } else if (this.service.valid(p)) { 
            // 다음 위치로 이동
          this.piece.move(p);
          if (event.key === 'arrowDown') {
            this.points += POINTS.SOFT_DROP;
          }
        }
        // 이전 그림 삭제
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        //신 그림 그림
        this.piece.draw()

      }
    }

  ngOnInit() {
    this.initBoard();

    this.resetGame();
  }

  initBoard() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
    this.ctx.scale(BLOCK_SIZE,BLOCK_SIZE);
  }

  initNext() {
    this.ctxNext = this.canvasNext.nativeElement.getContext('2d');
    this.ctxNext.canvas.width = COLS * BLOCK_SIZE;
    this.ctxNext.canvas.height = ROWS * BLOCK_SIZE;
    this.ctxNext.scale(BLOCK_SIZE,BLOCK_SIZE);
  }

  play() {
     this.resetGame();
     this.next  = new Piece(this.ctx);
     this.piece = new Piece(this.ctx);
    // this.next.drawNext(this.ctxNext);
     this.time.start = performance.now();

    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }

     this.animate();
   //  this.drawBoard();
  }

  animate(now = 0) {
    // 경과시간 갱신
    this.time.elapsed = now - this.time.start;
    // 레벨에서 설정한 시간이 경과한 경우 
    if ( this.time.elapsed > this.time.level) {
       // 시간 처음으로 갱신
       this.time.start = now;
       if(!this.drop()) {
            this.gameOver();
            return;
       }
    }
   // this.piece.draw(); 
    this.draw();
   this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.piece.draw(); 
    this.drawBoard();
   
  }

  drop() : boolean {
    let p = this.moves[KEY.DOWN](this.piece);
    if (this.service.valid(p)) {
      this.piece.move(p);     
    } else {
      this.freeze();
      this.clearLines();
      if (this.piece.y === 0) {
        // Game Over
        return false;
      }
      this.piece = this.next;
      this.next = new Piece(this.ctx);
      this.next.drawNext(this.ctxNext);
    }
    return true;
  }

  drawBoard() {
     this.board.forEach((row,y)=> {
        row.forEach((value, x)=> {
            if (value > 0) {
               this.ctx.fillStyle = COLORS[value];
               this.ctx.fillRect(x, y, 1,1)
            }
        })
     });
    
  }

  clearLines() {
    let lines = 0;
    this.board.forEach((row, y)=> {
       if (row.every(value => value !== 0)) {
         lines++;
         this.board.splice(y,1);
         this.board.unshift(Array(COLS).fill(0));
       }
    });
    if (lines > 0) {
      // 점수 계산
      this.points += this.service.getLinesClearedPoints(lines, this.level);
      this.lines += lines;
      if (this.lines >= LINES_PER_LEVEL) {
        this.level++;
        this.lines -= LINES_PER_LEVEL;
        this.time.level = LEVEL[this.level];
      }
    }
  }

  freeze() {
    this.piece.shape.forEach((row,y)=> {
      row.forEach((value,x)=> {
         if (value > 0) {
           this.board[y + this.piece.y][x + this.piece.x]= value;
         }
      })
    })
  }

 

  getEmptyBoard(): number[][] {
     return Array.from( { length: ROWS} , ()=> Array(COLS).fill(0))

  }

  resetGame() {
    this.points = 0;
    this.lines  = 0;
    this.level  = 0;
    this.board  =  this.getEmptyBoard();
    this.time = { start: 0, elapsed: 0, level: LEVEL[this.level]}
  }

 gameOver() {
   cancelAnimationFrame(this.requestId);
   this.ctx.fillStyle = 'black';
   this.ctx.fillRect(1,3,8,1.2);
   this.ctx.font='1px Arial';
   this.ctx.fillStyle = 'red';
   this.ctx.fillText('게임 종료',1.8,4);
 }
 */


}
