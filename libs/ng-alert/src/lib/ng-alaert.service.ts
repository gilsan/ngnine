import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { AlertMessag } from './alter-message';


@Injectable()
export class NgAlertService {

   public alertMessage$ = new Subject<AlertMessag>()

   public createSuccessAlert(message: string): void {
       this.alertMessage$.next(this.createAlertMessage('success',message,'green'));
   }

   public createDangerAlert(message: string): void {
       this.alertMessage$.next(this.createAlertMessage('Danger',message, 'red'));
   }


   public createWarning(message: string): void {
       this.alertMessage$.next(this.createAlertMessage('Warning',message,'darkorange'));
   }

   public createInfoAlert(message: string): void {
       this.alertMessage$.next(this.createAlertMessage('Info',message,'dodgerblue'));
   }

   public createAlertMessage(prefix: string, message:string, color:string) {
        return {prefix,message, color};
   }
}