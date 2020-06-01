import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { range, interval, from, combineLatest, fromEvent, Observable, merge, Subject,} from 'rxjs';
import { map, toArray, flatMap, mergeMap, tap, sample, switchMap, take, buffer, bufferCount, startWith, filter, timestamp, distinct, scan, takeWhile } from 'rxjs/operators';
 
import {SubSink} from "subsink";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit, OnDestroy {

  width   = window.innerWidth;
  height = window.innerHeight; 
  private SPEED = 40;
  private STAR_NUMBER = 250;
  private SHOOTING_FREQ = 250;
  private SHOOTING_SPEED = 15;
  private ENEMY_FREQ = 1500;
  private EMEMY_SHOTTING_FREQ = 750;
  private SCORE_INCREASE = 10;
  private HERO_Y = this.height - 30;
  
  @ViewChild('canvas', {static: true})
   canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  mouseMove$: Observable<any>;
  Game$: Observable<any>;
  StarStream$: Observable<any>;
  SpaceShip$: Observable<any>;
  playerShots$: Observable<any>;
  playerFiring$: Observable<any>;
  HeroShots$: Observable<any>;
  Enemies$: Observable<any>;
  ScoreSubject = new Subject();
  score$: Observable<any>;

  private subs = new SubSink();

  constructor(
    private ngZone: NgZone,
  ) {}

  ngOnInit() { }

  ngOnDestroy(){
     this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {   
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.setAttribute('width', this.width.toString())
    this.canvas.nativeElement.setAttribute('height', this.height.toString());  
    /***********  Observable */ 

    this.playerShots$ = merge(
      fromEvent(this.canvas.nativeElement,'click'),
      fromEvent(document,'keydown').pipe(       
        filter( (evt:KeyboardEvent) => {
          return evt.keyCode === 32
        })
      )
    );
    this.playerFiring$ = this.playerShots$.pipe(
      startWith({}),
      sample(interval(200)),
      timestamp()
    );

    this.mouseMove$ = fromEvent(this.canvas.nativeElement, 'mousemove');
    this.SpaceShip$ =  this.mouseMove$.pipe(
        map(event => {
          return { x: event.clientX, y : this.HERO_Y}
        }),
        startWith({x: this.width /2, y: this.HERO_Y})
      );

    this.StarStream$ = range(1, 250)
       .pipe(
         map(()=> {
             return {
               x: Math.random() * window.innerWidth,
               y: Math.random() *  window.innerHeight,
               size: Math.random() * 3 + 1
             };
         }),
         toArray(),
         flatMap((stars)=> from(stars).pipe(
           
             map(stars => {
               if (stars.y > window.innerHeight) {
                  stars.y = 0; 
               }
               stars.y += 3;
               return stars;
             })
         )),
         toArray()        
      );

     this.Enemies$ =  interval(this.ENEMY_FREQ).pipe(
         scan(enemyArray => {
            let enemy = { 
                      x: Math.random() * this.width,
                      y: -30,
                      shots: [],
                      isDead: false
                  };
             this.ngZone.runOutsideAngular(()=> {
              interval(this.EMEMY_SHOTTING_FREQ).subscribe(()=> {
                if(!enemy.isDead) {
                   enemy.shots.push({x: enemy.x, y: enemy.y})
                }
                enemy.shots = enemy.shots.filter(shot => {
                 return shot.x > -40 && shot.x < this.width + 40 && shot.y > -40 && shot.y < this.width + 40;
                })
                });
             });
     
           return enemyArray.concat(enemy);
         },[])
      );

     this.score$ =  this.ScoreSubject.pipe(
        scan((acc, curr) => acc + <number>curr, 0),
        startWith(0)
      )

    this.HeroShots$ = combineLatest(this.playerFiring$,this.SpaceShip$).pipe(
       map(([shotEvents,spaceShip]) => {
         return {
           timestamp: shotEvents.timestamp,
           x: spaceShip.x
         }
       }),
       distinct(shot => shot.timestamp),
       scan((shotArray, shot)=> {
          shotArray.push({x: shot.x, y: this.HERO_Y});
          return shotArray.filter(cordi => {
            return cordi.x > -40 && cordi.x < this.width + 40 && cordi.y > -40 && cordi.y < this.width + 40;
          })
       },[])

     );

    this.Game$ = combineLatest(this.StarStream$, this.SpaceShip$,this.HeroShots$,this.Enemies$, this.score$ ).pipe(
      map(([stars,spaceship,heroshots, enemy, score ])=> { 
        return { 
          stars: stars,
          spaceship: spaceship,
          heroshots: heroshots,
          enemy: enemy,
          score: score
        }
      })
      // ,
      // sample(interval(40)) ,
      // takeWhile((actors)=> {
      //    let isGameOver  = this.gameOver(actors.spaceship, actors.enemy);
      //    if (isGameOver === true) {
      //      actors.enemy.forEach(en => {
      //        en.isDead = true;
      //      });
      //    }
      //   return isGameOver === false;
      // })
    );

    
   /************    */ 
    this.renderScene();
  
  }

 
  private renderScene() {
     this.subs.sink = this.Game$.subscribe( data => {
    //  console.log('[61][renderScene]:', data);
      this.paintStars(data.stars);
      this.paintSpaceShip(data.spaceship.x, data.spaceship.y);
      this.paintEnemies(data.enemy);
      this.paintHeroShots(data.heroshots, data.enemy);
    });
  }
 
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  drawTriangle(x,y, width, color, direction) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(x -width, y);
    this.ctx.lineTo(x, direction === 'up' ? y -width : y + width);
    this.ctx.lineTo(x + width, y);
    this.ctx.lineTo( x - width, y);
    this.ctx.fill();
  }

  paintStars(stars: any) {
  //  console.log('[140][paintStars]:', stars);
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = '#ffffff';
   
    stars.forEach( star => {    
        this.ctx.fillRect(star.x, star.y, star.size, star.size);
     });
  }
  
  paintSpaceShip(x,y) {
    this.drawTriangle(x, y, 20, '#ff0000', 'up');
  }

  colision(target1, target2) {
    return (target1.x> target2.x - 20 && target1.x < target2.x + 20) &&
           (target1.y> target2.y - 20 && target1.y < target2.y + 20);
  }

  paintEnemies(enemies) {
    enemies.forEach(enemy => {
       enemy.y += 5;
       enemy.x += this.getRandomInt(-15, 15);
       if (!enemy.isDead) {
          this.drawTriangle(enemy.x, enemy.y, 20, '#00ff00', 'down');
       }

      enemy.shots.forEach(shot => {
        shot.y += this.SHOOTING_SPEED;
        this.drawTriangle(shot.x, shot.y, 5, '#00ffff', 'down');
      });
    });
  }

  paintScore(score) {
     this.ctx.fillStyle = '#ffffff';
     this.ctx.font = 'bold 26px sans-serif';
     this.ctx.fillText('Score' + score, 40, 43);
  }

  paintHeroShots(heroShots, enemies) {
    heroShots.forEach((shot, i)=> {
      let impact = false;
      for(let l =0; l < enemies.length; l++) {
        let enemy = enemies[l];
        if (!enemy.isDead && this.colision(shot, enemy)) {
            this.ScoreSubject.next(this.SCORE_INCREASE);
            enemy.isDead = true;
            shot.x = shot.y = -100;
            impact = true;
            break;
        }
      }

      if (!impact) {
        shot.y -= this.SHOOTING_SPEED;
        this.drawTriangle(shot.x,shot.y, 5, '#ffff00', 'up');
      }

    })
  }

  gameOver(player, enemies): boolean {
    return  enemies.some((enemy)=> {
      if (this.colision(player, enemy)) {
        return true;
      }
      return enemy.shots.some((shot)=> {
         return this.colision(player,shot);
      })
    });    
  }

  /*
  private StarStream = interval(5000)
     .pipe(       
      switchMap(() => range(1,250) ),
      map(()=> {
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() *  window.innerHeight,
          size: Math.random() * 3 + 1
        };
    }),  
    bufferCount(250),   
   // toArray(),  
    flatMap((stars)=> from(stars).pipe( 
        map(stars => {
          if (stars.y > window.innerHeight) {
             stars.y = 0; 
          }
          stars.y += 3;
          return stars;
        })
    )),  
    tap(data => console.log('tab; ',data))
    //  toArray() ,     
     );
    */ 


}





    

