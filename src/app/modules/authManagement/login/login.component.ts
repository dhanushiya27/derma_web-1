import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  role = [
    { role: 'Doctor', code: 'D' },
    { role: 'Nurse', code: 'N' }
  ];
  constructor(private formBuilder: FormBuilder,private router: Router ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['test@gmail.com', [Validators.required, Validators.email]],
      password: [ 'test@123',[Validators.required, Validators.maxLength(20)]],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('userName').value;
      const password = this.loginForm.get('password').value;
  
      if (username === 'doctor@gmail.com' && password === 'doctor@123') {
        this.setRole('D');
        this.router.navigate(['/all-appointment']);
      } 
      else if (username === 'nurse@gmail.com' && password === 'nurse@123') {
        this.setRole('N');
        this.router.navigate(['/all-appointment']);
      }
      else if (username === 'test@gmail.com' && password === 'test@123') {
        this.setRole('N');
        this.router.navigate(['/all-appointment']);
      }
      else {
        console.error("Invalid credentials");
        this.loginForm.get('password').setValue('');
      }
    }
  }
  private setRole(role: string): void {
    localStorage.setItem('userRole', role);
    console.log(role,'role');
  }
}
