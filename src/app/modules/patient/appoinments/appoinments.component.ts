import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { FormBuilder, FormGroup } from '@angular/forms';
 
 
@Component({
  selector: 'app-appoinments',
  standalone: true,
  imports: [CommonModule,TabViewModule,CalendarModule,DropdownModule,TableModule,TableComponent,ReactiveFormsModule],
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.scss']
})
export class AppoinmentsComponent {
 
  filterForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      startDate: [''],
      toDate: [''],
      episodeStatus: [''],
    });
  }
 
  onFilterClick() {
    const startDate = this.filterForm.value.startDate;
    const toDate = this.filterForm.value.toDate;
 
    if (startDate && toDate) {
      const filteredData = this.tableData.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= toDate;
      });
 
      // Update the tableData with filteredData
      this.tableData = filteredData;
    }
  }
 
 
 
  apointmentType : any [] =[
    { id : '1' , name : 'Follow-Up 5m'},
    { id : '2' , name : 'Follow-Up 10m'},
    { id : '3' , name : 'Follow-Up 15m'},
    { id : '4' , name : 'Dental Consultation'}
  ]
 
  cols =[
    { field : 'date', date : 'date', header : 'Date', needSort : false, display : true },
    { field : 'time', date : 'time', header : 'Time', needSort : false, display : true},
    { field : 'company', date : 'company', header : 'Company', needSort : false, display : true},
    { field : 'branch', date : 'branch', header : 'Branch', needSort : false, display : true},
    { field : 'practitioner', date : 'practitioner', header : 'Practitioner', needSort : false, display : true},
    { field : 'appointmentType', date : 'appointmentType', header : 'Appointment Type', needSort : false, display : true},
    { field : 'serviceUnit', date : 'serviceUnit', header : 'Service Unit', needSort : false, display : true},
    { field : 'lastComment', date : 'lastComment', header : 'Last Comment', needSort : false, display : true}
  ];
 
  tableData = [
    {
      date : '08/10/2023',
      time : '13:00:00',
      company : 'Derma Clinic',
      branch : '',
      practitioner : 'Mustafa Chabar',
      appointmentType : 'Follow-Up 15m',
      serviceUnit : '',
      lastComment : '',
    },
    {
      date : '12/30/2023',
      time : '13:00:00',
      company : 'Derma Clinic',
      branch : '',
      practitioner : 'Mustafa Chabar',
      appointmentType : 'Follow-Up 15m',
      serviceUnit : '',
      lastComment : '',
    },
    {
      date : '08/20/2023',
      time : '13:00:00',
      company : 'Derma Clinic',
      branch : '',
      practitioner : 'Mustafa Chabar',
      appointmentType : 'Follow-Up 15m',
      serviceUnit : '',
      lastComment : '',
    },
    {
      date : '08/26/2023',
      time : '13:00:00',
      company : 'Derma Clinic',
      branch : '',
      practitioner : 'Mustafa Chabar',
      appointmentType : 'Follow-Up 15m',
      serviceUnit : '',
      lastComment : '',
    }
    ];
   
}