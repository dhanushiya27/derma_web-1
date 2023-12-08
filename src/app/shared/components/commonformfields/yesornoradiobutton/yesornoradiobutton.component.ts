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

@Component({
  selector: 'app-yesornoradiobutton',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule,RadioButtonModule],
  templateUrl: './yesornoradiobutton.component.html',
  styleUrls: ['./yesornoradiobutton.component.scss']
})
export class YesornoradiobuttonComponent {
  @Input() sectionTitle!: string;
  @Output() onSubmitEvent = new EventEmitter<void>();
  isChecked: boolean = false;
  yesornoRadioBtn!: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
   
  }

  radioCheck(event:any){
   console.log(this.yesornoRadioBtn.value , 'eve+++');
   this.onSubmitEvent.emit(this.yesornoRadioBtn.value);
  }

  ngOnInit() {
    this.yesornoRadioBtn = this.formBuilder.group({

      selectedValue: new FormControl(null) 
    })
  }
  onSubmit() {
    console.log(this.yesornoRadioBtn.value);
    
    this.onSubmitEvent.emit();
  }
}
