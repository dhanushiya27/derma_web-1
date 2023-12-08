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
import { BodyChartComponent } from './body-chart/body-chart.component';
import { FractionalFormComponent } from './fractional-form/fractional-form.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-fractional',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule,
    TabViewModule,BodyChartComponent,FractionalFormComponent,SummaryComponent],
  templateUrl: './fractional.component.html',
  styleUrls: ['./fractional.component.scss']
})
export class FractionalComponent {
  fractionalForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,private router: Router ) {}

  ngOnInit() {
    this.fractionalForm = this.formBuilder.group({})
  }

  summary(){
      this.router.navigate(['/summary']);
  }
  
  onSubmit(){}
}
