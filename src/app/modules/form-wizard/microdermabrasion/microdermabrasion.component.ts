import { Component ,Input, Output } from '@angular/core';
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
import { TabViewModule } from 'primeng/tabview';
import { MicrodermabrasionFormComponent } from './microdermabrasion-form/microdermabrasion-form.component';

@Component({
  selector: 'app-microdermabrasion',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule,TabViewModule,MicrodermabrasionFormComponent],
  templateUrl: './microdermabrasion.component.html',
  styleUrls: ['./microdermabrasion.component.scss']
})
export class MicrodermabrasionComponent {
  MicrodermabrasionFrom: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private router: Router ) {
   
  }
  ngOnInit() {
 
    this.MicrodermabrasionFrom = this.formBuilder.group({
      selectedValue: ['']
    });
  }
  handleChildSubmit() {
  
  }
 
  
  onSubmit(){

  }
}
