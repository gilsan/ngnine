import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseAuthService } from './firebase-auth.service';

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    providers: [
        FirebaseAuthService
    ],
    imports: [
        ReactiveFormsModule
    ]
})
export class AuthModule {

}