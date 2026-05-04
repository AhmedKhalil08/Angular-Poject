import { Component } from '@angular/core';
import { Users } from '../../Services/users';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private userServices:Users, private router:Router){}
  signUpForm=new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    firstName : new FormControl('', [Validators.required,Validators.minLength(3)]),
    lastName : new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });
  onSubmit() {
    if (this.signUpForm.valid) {
        this.userServices.create(this.signUpForm.value as any).subscribe(() => {
            this.router.navigate(['/signin']);
        });
    }
}
}
