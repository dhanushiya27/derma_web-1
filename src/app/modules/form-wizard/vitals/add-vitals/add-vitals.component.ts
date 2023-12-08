// Developer Name :Dhanushiya
// Module Name: Add Vitals

import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';

@Component({
  selector: 'app-add-vitals',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './add-vitals.component.html',
  styleUrls: ['./add-vitals.component.scss'],
})
export class AddVitalsComponent implements OnInit {
  @Output() formDataChanged: EventEmitter<any> = new EventEmitter();
  @Input() formData:any;
  vitalSignsForm!: FormGroup;
  bmiValue: string = '0';
  isFormDirty: boolean = false;

  reflexeState: any[] = [{ name: 'Normal' }, { name: 'Abnormal' }];
  constructor(private fb: FormBuilder,private el: ElementRef) {}
  ngOnInit(): void {
    this.vitalSignsForm = this.fb.group({
      bodyTemperature: ['', Validators.required],
      heartRate: ['', Validators.required],
      respiratoryRate: ['', Validators.required],
      bloodGlucose: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      spo2: ['', Validators.required],
      reflexes: ['', Validators.required],
      systolicBP: ['', Validators.required],
      diastolicBP: ['', Validators.required],
      combinedBP: [''],
      headCircumference: ['', Validators.required],
      notes: [''],
      bmi: [''],
    });
    this.vitalSignsForm.valueChanges.subscribe(() => {
      this.isFormDirty = true;
      this.calculateCombinedBP(); 
      console.log(this.vitalSignsForm.value);
      
    });
    this.vitalSignsForm.get('height')?.valueChanges.subscribe(() => {
      this.calculateBMI();
    });

    this.vitalSignsForm.get('weight')?.valueChanges.subscribe(() => {
      this.calculateBMI();
    });
    if (this.formData) {
      this.vitalSignsForm.patchValue({
        height: this.formData.height,
        weight: this.formData.weight,
        bodyTemperature: this.formData.bodyTemperature,
        heartRate: this.formData.heartRate,
        respiratoryRate: this.formData.respiratoryRate,
        bloodGlucose: this.formData.bloodGlucose,
        spo2: this.formData.spo2,
        reflexes: this.formData.reflexes,
        systolicBP: this.formData.systolicBP,
        diastolicBP: this.formData.diastolicBP,
        headCircumference: this.formData.headCircumference,
        notes:this.formData.notes,
        bmi: this.formData.bmi,
      });
    }
  }
  calculateCombinedBP() {
    const systolicBP = this.vitalSignsForm.get('systolicBP')?.value;
    const diastolicBP = this.vitalSignsForm.get('diastolicBP')?.value;
  
    if (systolicBP !== null && diastolicBP !== null) {
      const combinedBP = `${systolicBP}/${diastolicBP}`;
      this.vitalSignsForm.patchValue({ combinedBP: combinedBP }, { emitEvent: false });
    }
  }
  calculateBMI() {
    const height = this.vitalSignsForm.get('height')?.value;
    const weight = this.vitalSignsForm.get('weight')?.value;

    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      this.bmiValue = bmi;
      this.vitalSignsForm.patchValue({ bmi: bmi });
    } else {
      this.vitalSignsForm.patchValue({ bmi: '0' });
    }
  }
}
