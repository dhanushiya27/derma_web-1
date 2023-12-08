import { Component ,NgModule } from '@angular/core';
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
  selector: 'app-historyform',
  standalone: true,
  imports: [CommonModule,ButtonModule,InputTextModule,FormsModule,ReactiveFormsModule,RadioButtonModule],
  templateUrl: './historyform.component.html',
  styleUrls: ['./historyform.component.scss']
})
export class HistoryformComponent {
  DermatologyForm: FormGroup | any;
  isChecked: boolean = false;
  selectedValue!: string;
  constructor(private formBuilder: FormBuilder, ) {
   
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  ngOnInit() {
    this.DermatologyForm = this.formBuilder.group({
      isChecked: new FormControl(false),
      selectedValue: new FormControl(null) 
    })
  }
  onSubmit(){

  }
}
