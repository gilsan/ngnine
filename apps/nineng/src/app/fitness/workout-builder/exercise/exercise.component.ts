import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, filter, tap, switchMap, debounceTime, distinctUntilChanged} from "rxjs/operators";
import { FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';

import { WorkoutService } from '../../core/workout.service';
import { Exercise } from '../../core/models';
import { from, fromEvent } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { basePath } from '../../../server.url';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy, AfterViewInit {

  imageUrl: any ='';
  exercise: Exercise =new Exercise('','','','','','',[],0);
  videos: Array<{id: number, name: string}> = [];
  videoArray: FormArray = new FormArray([]);
  flag: string ='';
  private subs = new SubSink();

  baseImagePath = basePath;

  @ViewChild('imagename', {static: true}) imagename: ElementRef;

  form: FormGroup;
  constructor(
    private router: ActivatedRoute,
    private workoutService: WorkoutService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const id =   this.router.snapshot.params['id'];

    if(id ) {
      this.flag = 'EXIST';
      this.initExercise(id);
      this.imageUrl =  '/' + this.baseImagePath +'/images/'+this.exercise.image;
    } else {
      this.flag = 'NEW';
      this.videos = [];
      this.imageUrl = '/' + this.baseImagePath +'/images/running.png';
     // this.videoArray = null;
     // this.videoArray.push(new FormControl(''));
    }

      this.form = this.fb.group({
        'id': [this.exercise.id],
         'name': [this.exercise.name],
         'title': [this.exercise.title],
         'description': [this.exercise.description],
         'procedure': [this.exercise.procedure],
         'nameSound': [this.exercise.nameSound],
         'image': [this.exercise.image],
         'videos':  this.addVideoArray()
      });
  }

  initExercise(id: number) {
    this.subs.sink = this.workoutService.exercises$
      .pipe(
       filter(data => data.length > 0),
       map(data => data.filter(item=> item.id === id,0))
      )
      .subscribe( data => {
          this.exercise = data[0];
          this.videos =data[0]['video'];
      });
  }

  ngAfterViewInit() {
       const event$ = fromEvent<any>(this.imagename.nativeElement, 'keyup')
                .pipe(
                  debounceTime(400),
                  distinctUntilChanged(),
                  map(event => {
                      const code = event.code;
                      const value = event.target.value;
                      return { code , value};
                  }),
                );
       event$.subscribe( data =>  {
           if (data['code'] === 'Enter' && data['value']) {
                this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://221.141.251.58/images/'+data.value);
           } else {
                this.imageUrl = '/' + this.baseImagePath +'/images/running.png';
           }
       });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
 }

  addVideoArray(): FormArray  {
    if (this.videos.length) {
      this.videos.forEach(video => {
        this.videoArray.push(new FormControl(video.name));
      })
      return this.videoArray;
    } else {
      this.videoArray.push(new FormControl(''))
      return this.videoArray;
    }
  }

  addVideo() {
    const vidArray = <FormArray>this.form.get('videos');
    vidArray.push(new  FormControl(''));
    console.log('[][addVideo]', this.form);
  }

  save() {
      if(this.flag ===  'EXIST') {
        this.updateExercise(this.form.value);
      } else if(this.flag === 'NEW'){
        this.addExercise(this.form.value);
        this.workoutService.saveNewExercise(this.exercise);
      }
  }

  updateExercise(exercise: Exercise) {
    this.exercise.name = exercise.name;
    this.exercise.title = exercise.title;
    this.exercise.description = exercise.description;
    this.exercise.procedure = exercise.procedure;
    this.exercise.nameSound = exercise.nameSound;
    this.exercise.image = exercise.image;
    this.exercise.videos = exercise.videos;
    console.log(this.form.value);
  }

  addExercise(exercise: Exercise) {
    this.exercise.name = exercise.name;
    this.exercise.title = exercise.title;
    this.exercise.description = exercise.description;
    this.exercise.procedure = exercise.procedure;
    this.exercise.nameSound = exercise.nameSound;
    this.exercise.image = exercise.image;
    this.exercise.videos = exercise.videos;
    console.log('[][addExercise]', this.form.value);
  }

  delete(index: number) {

   // const vidArray = <FormArray>this.form.controls['videos'];
    const vidArray = <FormArray>this.form.get('videos')
    vidArray.removeAt(index);
     console.log(this.form);
  }



}
