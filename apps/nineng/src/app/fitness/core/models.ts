/*
export interface WorkoutPlan {
  name: string;
  title: string;
  restBetweenExercise: number;
  exercises: ExercisePlan[];
  description?: string;
}

export interface ExercisePlan {
    exercise: Exercise;
    duration: number;
}

export interface  Exercise {
  name: string;
  title: string;
  description: string;
  image: string;
  nameSound?: string;
  procedure?: string;
  videos?: Array<string>;

}

export interface ExerciseList {
  name: string;
  duration: number;
}
*/



export class WorkoutPlan {
    constructor (
        public name: string,
        public title: string,
        public restBetweenExercise: number,
        public exercises: ExercisePlan[],
        public description?: string,
        public id?: number

    ){}

    totalWorkoutDuration(): number {
        if (!this.exercises) {
            return 0;
        }

        const total = this.exercises.map((e)=> e.duration).reduce((previous,current)=> previous + current);

        return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length -1) + total;
    }

}

export class ExerciseList {
   constructor(
     public name: string,
     public duration: number,
     public id?: number
   ) {}
}

 export class ExercisePlan {
     constructor(public exercise: Exercise, public duration: number) {}
 }

  export class Exercise {
      constructor(
          public name: string,
          public title: string,
          public description: string,
          public image: string,
          public nameSound?: string,
          public procedure?: string,
          public videos?: Array<string>,
          public id?: number,
          public _id?: string,
      ) {}
  }

  export class WorkoutLogEntry {
    constructor(
       public startedOn: Date,
       public completed: boolean = false,
       public exercisesDone: number = 0,
       public lastExercise?: string,
       public endedOn?: Date
    ) {}
  }

  export class ExerciseProgressEvent {
    constructor(
      public exercise: ExercisePlan,
      public runningFor: number,
      public timeRemaining: number,
      public workoutTimeRemaining: number
    ) {}
  }

  export class ExerciseChangedEvent {
    constructor(
      public current: ExercisePlan,
      public next: ExercisePlan
    ){}
  }

