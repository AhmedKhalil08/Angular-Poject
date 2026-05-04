import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../../Services/users';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
 loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  errorMessage: string='';

    constructor(private usersService:Users, private router:Router){}
   
onSubmit() {
        const { username, password } = this.loginForm.value;
        this.usersService.getAll().subscribe(users => {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                this.router.navigate(['/home']);
            } else {
                this.errorMessage = 'Invalid username or password';
            }
        });
    }}
