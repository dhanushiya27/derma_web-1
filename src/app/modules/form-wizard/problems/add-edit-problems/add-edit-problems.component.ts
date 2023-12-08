import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-problems',
  standalone: true,
  imports: [CommonModule, DropdownModule,CalendarModule,ReactiveFormsModule],
  templateUrl: './add-edit-problems.component.html',
  styleUrls: ['./add-edit-problems.component.scss']
})
export class AddEditProblemsComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}


  @Input() editedData: any;
  @Output() editDataEvent = new EventEmitter<string>();

  addOrEditProblems!: FormGroup;


 

  status: any[] = [{ name: 'Active' }, { name: 'Inactive' },{name:'Removed'}];
  outcome: any[] = [{ name: 'Improved' }, { name: 'Poor' }];
  problemType: any[] = [{ name: 'Primary' }, { name: 'Principal' }];
  occurance: any[] = [{ name: 'First' }, { name: 'Second' }];
  severity: any[] = [{ name: 'Mild to moderate' }, { name: 'Heavy' }];
  bodySiteCode:any[]=[];
  referredBy:any[]=[];
  currentPage:string = "view"

  
  
  ngOnInit(): void {
    console.log('Edited Data:', this.editedData);
    this.addOrEditProblems = this.fb.group({
      problemStatus: [''],
      outcome: [''],
      problemType: [''],
      occurance: [''],
      severity: [''],
      destination: [''],
      bodySiteCode: [''],
      referredBy: [''],
      startDate: [''],
      endDate: [''],
      comments: [''],
    });
  }

  onUpdate() {
    console.log('Form Values:', this.addOrEditProblems.value);
  }

}
