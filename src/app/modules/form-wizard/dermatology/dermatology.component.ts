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
import { TabViewModule } from 'primeng/tabview';
import {HistoryformComponent} from './historyform/historyform.component'
@Component({
  selector: 'app-dermatology',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule,TabViewModule,HistoryformComponent],
  templateUrl: './dermatology.component.html',
  styleUrls: ['./dermatology.component.scss']
})
export class DermatologyComponent {
  DermatologyForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder,private router: Router ) {
   
  }
  ngOnInit() {
    this.DermatologyForm = this.formBuilder.group({})
  }
  onSubmit(){

  }
}
