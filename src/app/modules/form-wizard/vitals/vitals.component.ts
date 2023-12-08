// Developer Name : Dhanushiya 
// Module Name: Vitals

import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { AddVitalsComponent } from './add-vitals/add-vitals.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { TabsComponent } from 'src/app/shared/components/tabs/tabs.component';
import { TabViewModule } from 'primeng/tabview';
import { ViewVitalsComponent } from './view-vitals/view-vitals.component';
import { ChartComponent } from './chart/chart.component';
@Component({
  selector: 'app-vitals',
  standalone: true,
  imports: [
    CommonModule,
    AddVitalsComponent,
    TableComponent,
    TabsComponent,
    TabViewModule,
    ViewVitalsComponent,
    ChartComponent,
  ],
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {
  @ViewChild('vitalsRef') addVitalsComponent!: AddVitalsComponent;
  formValues: any;
  selectedId: any;
  //data list for shared table
  currentlySelectedTabIndex: number = 0;
  isTabHighlighted: boolean = false;
  isTabHighlightedCondition(tabIndex: number): boolean {
    return tabIndex === this.currentlySelectedTabIndex;
  }
  onTabChange(event: any) {
    this.currentlySelectedTabIndex = event.index;
  }

  editVitals(data: any) {
    console.log(data);
    this.currentPage = 'edit';
    this.formValues = data;
  }
  viewVitals(data: any) {
    console.log(data);
    this.currentPage = 'report';
    this.formValues = data;
  }
  ngOnInit() {
    const storedTableData = localStorage.getItem('tableData');
    if (storedTableData) {
      this.tableData = JSON.parse(storedTableData);
    }
  }
  updateForm() {
    const childFormValue = this.addVitalsComponent.vitalSignsForm.value;
    const currentDate = new Date();
    childFormValue.date = formatDate( currentDate,'yyyy-MM-dd HH:mm:ss','en-US');
    childFormValue.action = 'edit';
    const combinedBP =childFormValue.systolicBP + '/' + childFormValue.diastolicBP + ' mmHg';
    childFormValue.combinedBP = combinedBP;
    console.log('Form value in parent:', childFormValue);
    this.tableData[this.selectedId] = childFormValue;
    this.currentPage = 'list';
  }
  submitForm() {
    const childFormValue = this.addVitalsComponent.vitalSignsForm.value;
    const currentDate = new Date();
    childFormValue.date = formatDate(currentDate,'yyyy-MM-dd HH:mm:ss','en-US');
    childFormValue.action = 'edit';
    const combinedBP = childFormValue.systolicBP + '/' + childFormValue.diastolicBP + ' mmHg';
    childFormValue.combinedBP = combinedBP;
    console.log('Form value in parent:', childFormValue);
    this.tableData.push(childFormValue);
    this.currentPage = 'list';
  }

  cols = [
    {
      field: 'date',
      data: 'date',
      header: 'Date',
      needSort: false,
      display: true,
    },
    {
      field: 'combinedBP',
      data: 'combinedBP',
      header: 'Blood Pressure',
      needSort: false,
      display: true,
    },
    {
      field: 'reflexes',
      data: 'reflexes',
      header: 'Reflexes',
      needSort: false,
      display: true,
    },
    {
      field: 'heartRate',
      data: 'heartRate',
      header: 'Heart Rate',
      needSort: false,
      display: true,
    },
    {
      field: 'respiratoryRate',
      data: 'respiratoryRate',
      header: 'Respiratory Rate',
      needSort: false,
      display: true,
    },
    {
      field: 'spo2',
      data: 'spo2',
      header: 'Oxygen Saturation',
      needSort: false,
      display: true,
    },
    {
      field: 'bodyTemperature',
      data: 'bodyTemperature',
      header: 'Temperature',
      needSort: false,
      display: true,
    },
    {
      field: 'bloodGlucose',
      data: 'bloodGlucose',
      header: 'Blood Glucose',
      needSort: false,
      display: true,
    },
    {
      field: 'headCircumference',
      data: 'headCircumference',
      header: 'Head Circumference',
      needSort: false,
      display: false,
    },
    {
      field: 'notes',
      data: 'notes',
      header: 'Notes',
      needSort: false,
      display: false,
    },
    {
      field: 'height',
      data: 'height',
      header: 'Height',
      needSort: false,
      display: true,
    },
    {
      field: 'weight',
      data: 'weight',
      header: 'Weight',
      needSort: false,
      display: true,
    },
    {
      field: 'bmi',
      data: 'bmi',
      header: 'BMI',
      needSort: false,
      display: true,
    },
    {
      field: 'action',
      data: 'action',
      header: '',
      needSort: false,
      display: true,
    },
  ];

  tableData = [
    {
      date: '2023-08-10 13:00:00',
      combinedBP: '120/80mmHg',
      reflexes: 'normal',
      heartRate: '100',
      respiratoryRate: '25',
      spo2: '100',
      bodyTemperature: 37,
      bloodGlucose: '3.5',
      headCircumference: 35,
      notes: 'hii',
      height: 168,
      weight: 56,
      bmi: 19.8,
      action: 'edit',
    },
    {
      date: '2023-08-10 13:00:00',
      combinedBP: '160/80mmHg',
      reflexes: 'normal',
      reflexesAbnormal: true,
      heartRate: '180',
      heartRateAbnormal: true,
      respiratoryRate: '25',
      respiratoryRateAbnormal: true,
      spo2: '100',
      oxygenSaturationAbnormal: true,
      bodyTemperature: 40,
      temperatureAbnormal: true,
      bloodGlucose: '3.5',
      bloodGlucoseAbnormal: true,
      headCircumference: 35,
      notes: 'hii',
      height: 168,
      weight: 56,
      bmi: 19.8,
      action: 'report',
    },
    {
      date: '2023-08-10 13:00:00',
      combinedBP: '120/80mmHg',
      reflexes: 'normal',
      heartRate: '100',
      respiratoryRate: '25',
      spo2: '100',
      bodyTemperature: 37,
      bloodGlucose: '3.5',
      headCircumference: 35,
      notes: 'hii',
      height: 168,
      weight: 56,
      bmi: 19.8,
      action: 'report',
    },
  ];
  currentPage: String = 'list';

  addVitals() {
    this.currentPage = 'add';
  }
  listVitals() {
    this.currentPage = 'list';
  }
}
