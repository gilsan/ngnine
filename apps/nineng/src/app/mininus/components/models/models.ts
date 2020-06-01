export interface Course  {
    id: number;
    description: string;
    iconUrl: string;
    longDescription: string;
    lessonsCount?:  number;
    category: string;
     
};

export interface Lesson {
    id: number;
     description: string;
     duration: string;
     seqNo: number;
     courseId: number;
}

export const Courses:Course[] = [
    {
        id: 1,
        description: 'Angular Core Deep Dive',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
        lessonsCount: 10,
        category: 'INTERMEDIATE'
    },
    {
        id: 2,
        description: 'RxJs In Practice Course',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
        category: 'BEGINNER',
        lessonsCount: 10
    },

    {
        id: 3,
        description: 'NgRx In Depth',
        longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'ADVANCED'
    },

    {
        id: 4,
        description: 'Angular for Beginners',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
        category: 'BEGINNER',
        lessonsCount: 10
    },
    {
        id: 5,
        description: 'Angular Security Course',
        longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11
    },
    {
        id: 6,
        description: 'Angular PWA Course',
        longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
        category: 'ADVANCED',
        lessonsCount: 8
    },
    {
        id: 7,
        description: 'Angular Advanced Course',
        longDescription: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
        category: 'ADVANCED'
    },
    {
        id: 8,
        description: 'Complete Typescript Course',
        longDescription: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
        category: 'BEGINNER'
    },
    {
        id: 9,
        description: 'Angular Architecture Course',
        longDescription: 'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
        category: 'BEGINNER'
    },
    {
        id: 10,
        description: 'Angular Material Course',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
        longDescription: 'Build Applications with the official Angular Widget Library',
        category: 'ADVANCED'
    }
];

export const Lessons: Lesson[] = [
        
    {
       id: 1,
       'description': 'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
       'duration': '4:17',
       'seqNo': 1,
       courseId: 1
   },
     {
       id: 2,
       'description': 'Building Your First  Component - Component Composition',
       'duration': '2:07',
       'seqNo': 2,
       courseId: 1
   },
    {
       id: 3,
       'description': 'Component @Input - How To Pass Input Data To an  Component',
       'duration': '2:33',
       'seqNo': 3,
       courseId: 1
   },
  {
       id: 4,
       'description': ' Component Events - Using @Output to create custom events',
       'duration': '4:44',
       'seqNo': 4,
       courseId: 1
   },
    {
       id: 5,
       'description': ' Component Templates - Inline Vs External',
       'duration': '2:55',
       'seqNo': 5,
       courseId: 1
   },
     {
       id: 6,
       'description': 'Styling  Components - Learn About Component Style Isolation',
       'duration': '3:27',
       'seqNo': 6,
       courseId: 1
   },
   {
       id: 7,
       'description': ' Component Interaction - Extended Components Example',
       'duration': '9:22',
       'seqNo': 7,
       courseId: 1
   },
    {
       id: 8,
       'description': ' Components Tutorial For Beginners - Components Exercise !',
       'duration': '1:26',
       'seqNo': 8,
       courseId: 1
   },
    {
       id: 9,
       'description': ' Components Tutorial For Beginners - Components Exercise Solution Inside',
       'duration': '2:08',
       'seqNo': 9,
       courseId: 1
   },
    {
       id: 10,
       'description': ' Directives - Inputs, Output Event Emitters and How To Export Template References',
       'duration': '4:01',
       'seqNo': 10,
       courseId: 1
   },       
   
    {
       id: 11,
       'description': 'Course Helicopter View',
       'duration': '08:19',
       'seqNo': 1,
       courseId: 2
   },

     {
       id: 12,
       'description': 'Installing Git, Node, NPM and Choosing an IDE',
       'duration': '04:17',
       'seqNo': 2,
       courseId: 2
   },

     {
       id: 13,
       'description': 'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
       'duration': '06:05',
       'seqNo': 3,
       courseId: 2
   },

   {
       id: 14,
       'description': 'How To Run Node In TypeScript With Hot Reloading',
       'duration': '03:57',
       'seqNo': 4,
       courseId: 2
   },

     {
       id: 15,
       'description': 'Guided Tour Of The Sample Application',
       'duration': '06:00',
       'seqNo': 5,
       courseId: 2
   },
    {
       id: 16,
       'description': 'Client Side Authentication Service - API Design',
       'duration': '04:53',
       'seqNo': 6,
       courseId: 2
   },
     {
       id: 17,
       'description': 'Client Authentication Service - Design and Implementation',
       'duration': '09:14',
       'seqNo': 7,
       courseId: 2
   },
    {
       id: 18,
       'description': 'The New Angular HTTP Client - Doing a POST Call To The Server',
       'duration': '06:08',
       'seqNo': 8,
       courseId: 2
   },
    {
       id: 19,
       'description': 'User Sign Up Server-Side Implementation in Express',
       'duration': '08:50',
       'seqNo': 9,
       courseId: 2
   },
   {
       id: 20,
       'description': 'Introduction To Cryptographic Hashes - A Running Demo',
       'duration': '05:46',
       'seqNo': 10,
       courseId: 2
   },
     {
       id: 21,
       'description': 'Some Interesting Properties Of Hashing Functions - Validating Passwords',
       'duration': '06:31',
       'seqNo': 11,
       courseId: 2
   },       
     {
       id: 22,
       'description': 'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
       'duration': '07:19',
       'seqNo': 1,
       courseId: 3
   },
     {
       id: 23,
       'description': 'Service Workers In a Nutshell - Service Worker Registration',
       'duration': '6:59',
       'seqNo': 2,
       courseId: 3
   },
   {
       id: 24,
       'description': 'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
       'duration': '7:28',
       'seqNo': 3,
       courseId: 3
   },
     {
       id: 25,
       'description': 'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
       'duration': '10:17',
       'seqNo': 4,
       courseId: 3
   },

    {
       id: 26,
       'description': 'Downloading The Offline Page - The Service Worker Installation Phase',
       'duration': '09:50',
       'seqNo': 5,
       courseId: 3
   },
     {
       id: 27,
       'description': 'Introduction to the Cache Storage PWA API',
       'duration': '04:44',
       'seqNo': 6,
       courseId: 3
   },
    {
       id: 28,
       'description': 'View Service Workers HTTP Interception Features In Action',
       'duration': '06:07',
       'seqNo': 7,
       courseId: 3
   },
     {
       id: 29,
       'description': 'Service Workers Error Handling - Serving The Offline Page',
       'duration': '5:38',
       'seqNo': 8,
       courseId: 3
   }
];