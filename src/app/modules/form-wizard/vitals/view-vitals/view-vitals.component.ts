// Developer Name : Dhanushiya
// Module Name: View Vitals
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-vitals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-vitals.component.html',
  styleUrls: ['./view-vitals.component.scss']
})
export class ViewVitalsComponent implements OnInit {
  @Input() formData: any;
  viewVitals!: any[];
  addQuotes = true;
 
  ngOnInit(): void {
  this.viewVitals = [
    { label: 'Patient Name', value: 'Ahmad Al Mazyd ',addQuotes:true},
    { label: 'Age', value: '36 Year 8 Month(s) 9 Day(s) ',addQuotes:true },
    { label: 'Age in months', value: 432  ,addQuotes:true},
    { label: 'Date and Time', value: this.formData.date,addQuotes:true },
    { label: 'Body Temperature', value: this.formData.bodyTemperature,addQuotes:true },
    { label: 'Heart Rate', value: this.formData.heartRate ,addQuotes:true},
    { label: 'Respiratory Rate', value: this.formData.respiratoryRate ,addQuotes:true},
    {label: 'Height', value: this.formData.height ,addQuotes:true},
    { label: 'Weight', value: this.formData.weight,addQuotes:true },
    { label: 'BMI', value: this.formData.bmi,addQuotes:true },
    { label: 'Blood oxygen saturation level (SpO2)', value: this.formData.spo2,addQuotes:true },
    { label: 'Reflexes', value:this.formData.reflexes ,addQuotes:true},
    { label: 'Blood Pressure', value:this.formData.combinedBP ,addQuotes:true},
    { label: 'Head Circumference', value:this.formData.headCircumference ,addQuotes:true},
    {label:'Created by',value:'Hasim',addQuotes:true},
    {label:'Updated by',value:'Hasim',addQuotes:true},
  ];
  }
}

 


