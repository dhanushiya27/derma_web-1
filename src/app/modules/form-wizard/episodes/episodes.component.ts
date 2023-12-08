// Developer Name : Rajaha Muthiaha 
// Module Name: Episodes 


import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEpisodesComponent } from './add-edit-episodes/add-edit-episodes.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';

//primeng
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule,TableModule,TableComponent,AddEditEpisodesComponent],
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  @ViewChild('episodeRef') addEipsodeComponent!: AddEditEpisodesComponent;

  currentPage:String ="list";
  formValues:any;

  originalData: any;
  someArgument: any;

  index:any;

  editEpisode(data:any) {
    console.log(data)
    this.currentPage = "edit"
    this.formValues = data;
    this.index = this.tableData.indexOf(data);
  }

  navtoadd(){
    this.currentPage = "add";
  }
  navtoepisode(){
    this.currentPage = "list";
  }
  submitForm(){
    // for validation purpose
    if(this.addEipsodeComponent.episodeForm.valid){
      const childFormValue = this.addEipsodeComponent.episodeForm.value;
    console.log(this.addEipsodeComponent.episodeForm);

    childFormValue.action = 'edit'; 

    this.tableData.push(childFormValue); // push data
    this.currentPage = 'list';
    
    // form reset
    this.addEipsodeComponent.resetForm();
    }else{
      // for validation purpose for invalid inputs
      this.addEipsodeComponent.episodeForm.markAllAsTouched();
      
    }
    
}



updateEpisode(){
  const childFormValue = this.addEipsodeComponent.episodeForm.value;
    childFormValue.action = 'edit';
    console.log('Form value in parent:', childFormValue);
    this.tableData[this.index]=childFormValue;
    this.currentPage = 'list';
    this.addEipsodeComponent.resetForm();

}

cols =[
  { field : 'startDate', date : 'startDate', header : 'Date', needSort : false, display : true },
  { field : 'episodeTitle', date : 'episodeTitle', header : 'Title', needSort : false, display : true},
  { field : 'status', date : 'status', header : 'Episode Status', needSort : false, display : true},
  { field : 'creator', date : 'creator', header : 'Creator', needSort : false, display : true},
  { field : 'episodeAge', date : 'episodeAge', header : 'Episode Age', needSort : false, display : true},
  { field : 'episodeStatus', date : 'episodeStatus', header : 'episode Status', needSort : false, display : true},
  { field : 'dischargedPlannedDate', date : 'dischargedPlannedDate', header : 'Discharged Planned Date', needSort : false, display : true},
  { field : 'endDate', date : 'endDate', header : 'End Date', needSort : false, display : true},
  { field : 'chiefComplaint', date : 'chiefComplaint', header : 'Chief Complaint', needSort : false, display : true},
  { field : 'signAndSymptoms', date : 'signAndSymptoms', header : 'Sign And Symptoms', needSort : false, display : true},
  { field : 'otherNote', date : 'otherNote', header : 'Other Note', needSort : false, display : true},
  { field : 'dateOfDischarge', date : 'dateOfDischarge', header : 'Date Of Discharge', needSort : false, display : true},
  { field : 'dischargeType', date : 'dischargeType', header : 'Discharge Type', needSort : false, display : true},
  { field : 'instructionAfterDischarge', date : 'instructionAfterDischarge', header : 'Instruction After Discharge',needSort : false, display : true},
  { field : 'action', date : 'action', header : '', needSort : false, display : true},
];

  tableData = [
  {
      startDate : '2023/10/02', //' 10/23/2023 '
      episodeTitle : 'Skin Allergy',
      status : 'Removed',
      episodeAge : '63',
      episodeStatus : 'Normal',
      dischargedPlannedDate : '10/23/2023',
      endDate : '10/23/2023',
      chiefComplaint : 'clear and clean',
      signAndSymptoms : 'more loose of hair',
      otherNote : 'Shower Daily',
      dateOfDischarge : '10/23/2023',
      dischargeType : 'Abnormal ',
      dischargeNote : 'clear and clean',
      instructionAfterDischarge : 'clear and clean',
      creator : 'Abdullah Al-Hargan',
      action : 'edit'
    },
    {
      startDate : '2023/08/05', //' 10/23/2023 '
      episodeTitle : 'Back Pain',
      status : 'Inactive',
      episodeAge : '56',
      episodeStatus : 'Abnormal',
      dischargedPlannedDate : '10/23/2023',
      endDate : '10/23/2023',
      chiefComplaint : 'clear and clean',
      signAndSymptoms : 'More Body Pain',
      otherNote : 'Take Regular Medicine',
      dateOfDischarge : '10/23/2023',
      dischargeType : 'Abnormal ',
      dischargeNote : 'clear and clean',
      instructionAfterDischarge : 'clear and clean',
      creator : 'Abdullah Al-Hargan',
      action : 'edit'
    },
  ];

}