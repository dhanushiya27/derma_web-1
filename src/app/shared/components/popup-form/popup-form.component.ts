import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-popup-form',
  standalone: true,
  imports: [CommonModule,DropdownModule,FormsModule,ReactiveFormsModule,InputTextModule,CalendarModule,CheckboxModule],
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {
  openFlag:boolean = true;
  selectedCity: any;
  myForm!: FormGroup;
  @Input() dataField :any
  @Input() header :any
  @Output() formSubmition = new EventEmitter<any>();
  title :any;
  inputFields:any = [];
  subtitle: any;
  cities:any = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  inputFieldsLine2: any;
  inputFieldsLine3: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group dynamically based on the inputFields array
    if(this.dataField?.length > 0){
      this.subtitle = this.dataField[0]?.subtitle;
    this.title = this.dataField[0]?.title;
    this.inputFields = this.dataField[0]?.formFields;
    this.inputFieldsLine2 = this.dataField[0]?.formFieldsline2;
    this.inputFieldsLine3 = this.dataField[0]?.formFieldsline3;
    console.log(this.inputFields, this.dataField);
    const mergedArray = [
      ...(this.inputFields || []),
      ...(this.inputFieldsLine2 || []),
      ...(this.inputFieldsLine3 || []),
    ];
    const formControls = mergedArray
    .reduce((acc:any, field:any) => {
      acc[field.name] = this.formBuilder.control('', field.required ? Validators.required : null);
      return acc;
    }, {});
    
    this.myForm = this.formBuilder.group(formControls);
    }
    
  }
  toggleForm(){
    this.openFlag = !this.openFlag;
  }
  onsubmit(){
    if(this.myForm.valid){
      console.log(this.myForm.value,'000000000000000');
      let obj = {
        type:this.title,
        name:this.subtitle,
        formValue:this.myForm.value
      }
      this.formSubmition.emit(obj)
    }else{
      this.myForm.markAllAsTouched();
    }
  }
  remove(){
    console.log('bin');
    
  }
}
