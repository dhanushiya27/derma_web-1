import { Component ,NgModule ,Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-multi-checkbox',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule,RadioButtonModule,CheckboxModule],
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.scss']
})
export class MultiCheckboxComponent {

  @Input() sectionTitle!: string;
  @Output() onSubmitEvent = new EventEmitter<void>();
  isChecked: boolean = false;
  multiselectFrom!: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
   
  }

  radioCheck(event:any){
   console.log(this.multiselectFrom.value , 'eve+++');
   this.onSubmitEvent.emit(this.multiselectFrom.value);
  }

  ngOnInit() {
    this.multiselectFrom = this.formBuilder.group({

      selectedValue: new FormControl(null) 
    })
  }
  onSubmit() {
    console.log(this.multiselectFrom.value);
    
    this.onSubmitEvent.emit();
  }

}
