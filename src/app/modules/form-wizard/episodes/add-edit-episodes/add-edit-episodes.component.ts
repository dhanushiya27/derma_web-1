// Developer Name : Rajaha Muthiaha 
// Module Name: Add-Edit Episodes 

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';
import { ModelComponent } from 'src/app/shared/components/model/model.component';
// import * as moment from 'moment';

//Primeng
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit-episodes',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule, CardModule, ReactiveFormsModule, CalendarModule, TableModule, ModelComponent],
  templateUrl: './add-edit-episodes.component.html',
  styleUrls: ['./add-edit-episodes.component.scss'],
})
export class AddEditEpisodesComponent {

  @Output() formDataChanged: EventEmitter<any> = new EventEmitter();
  @Input() formData: any;

  formSubmitted: boolean = false;
  // epsstatus: any[] = [{ name: 'Normal' }, { name: 'Abnormal' }];
  // distype: any[] = [{ name: 'Normal' }, { name: 'Abnormal' }];

  episodeForm!: FormGroup; 
  product: any;
isDropdownDisabled: boolean = true;

// / popup message list - Discharge Type & Episode Status
  dischargeTypeList : any[] = [
    { id : '1' , name : 'Completion of Treatment' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '2' , name : 'Transfer of another facility' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '3' , name : 'Discharge against medical service' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '4' , name : 'Insurance Coverage' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '5' , name : 'Confort Measures' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '6' , name : 'Deceased' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '7' , name : 'Financial Coverage' ,icon : '' ,textBold : 'true' ,display : 'true' },
  ]
  episodeStatusList : any[] = [
    { id : '1' , name : 'Active' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '2' , name : 'In Active' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '3' , name : 'On Hold' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '4' , name : 'Revoked' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '5' , name : 'Scheduled' ,icon : '' ,textBold : 'true' ,display : 'true' },
    { id : '6' , name : 'Completed' ,icon : '' ,textBold : 'true' ,display : 'true' },
  ]
  alertMessage : any [] = [
    { id : '1' , name : '1 - Order was placed in error and needs to be corrected' ,icon : '' ,textBold : 'true' ,display : 'true'},
    { id : '2' , name : '2 - Order is no longer necessary or relevant' ,icon : '' ,textBold : 'true' ,display : 'true'},
    { id : '3' , name : '3 - Order was duplicated and needs to be removed' ,icon : '' ,textBold : 'true' ,display : 'true'},
    { id : '4' , name : '4 - Patient’s condition has changed and order needs to be modifiedied' ,icon : '' ,textBold : 'true' ,display : 'true'},
    { id : '5' , name : '5 - Patient experienced an adverse reaction and order needs to be Stopped' ,icon : '' ,textBold : 'true' ,display : 'true'},
  ]
  alertRevokeMessage : any =[
    { name : 'Are you sure you want to Revoke ?' }
  ]

  constructor(public dialogService: DialogService) { }
    showDischargeType(data: any, type: any) {
      const ref = this.dialogService.open(ModelComponent, {
        header: 'Discharge Type',
        width: '40%',
        contentStyle: { "max-height": "310px ", "overflow": "auto", },
        baseZIndex: 10000,
        // style: { 'height': '300px' },
        data: {
          data: this.dischargeTypeList,
          type: "episodediscStatus",
          confirm: false
        }
      });
      ref.onClose.subscribe((result: any) => {
        console.log('Dialog closed with result:', result);
        this.episodeForm.get('dischargeType')?.setValue(result.id);
      });
    }
   
    // popup message Episode Status
    showEpisodeStatus(data: any, type: any) {
      const ref = this.dialogService.open(ModelComponent, {
        header: 'Episode Status',
        width: '40%',
        contentStyle: { "max-height": "280px ", "overflow": "auto", },
        baseZIndex: 10000,
        // style: { 'height': '300px' },
        data: {
          data: this.episodeStatusList,
          type: "episodeStatus",
          confirm: false
        }
      });
      ref.onClose.subscribe((result: any) => {
        console.log('Dialog closed with result:', result);
        this.episodeForm.get('episodeStatus')?.setValue(result.id);
      });
    }
   
    showAlert(data: any, type: any) {
      const ref = this.dialogService.open(ModelComponent, {
        header: 'Alert',
        width: '50%',
        contentStyle: { "max-height": "400px ", "overflow": "auto" },
        baseZIndex: 10000,
        // style: { 'height': '400px' },
        data: {
          alertMessages: this.alertMessage,
          data: this.alertRevokeMessage,
          showRevokeAlert: true,
          type: "alert",
          confirm: true
        },
      });
      ref.onClose.subscribe((result: any) => {
        console.log('Dialog closed with result:', result);
      });
    }
  ngOnInit(): void {
    this.episodeForm = new FormGroup({
      episodeTitle: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      episodeAge: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
      episodeStatus: new FormControl({ value: '', disabled: true }, Validators.required),
      dischargedPlannedDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      chiefComplaint: new FormControl('', Validators.required),
      signAndSymptoms: new FormControl('', Validators.required),
      otherNote: new FormControl('', Validators.required),
      dateOfDischarge: new FormControl('', Validators.required),
      dischargeType: new FormControl({ value: '', disabled: true }, Validators.required),
      dischargeNote: new FormControl('', Validators.required),
      instructionAfterDischarge: new FormControl('', Validators.required),
    });

    if (this.formData) {
      this.episodeForm.patchValue({
        episodeTitle: this.formData.episodeTitle,
        startDate: this.formData.startDate,
        episodeAge: this.formData.episodeAge,
        episodeStatus: this.formData.episodeStatus,
        dischargedPlannedDate: this.formData.dischargedPlannedDate,
        endDate: this.formData.endDate,
        chiefComplaint: this.formData.chiefComplaint,
        signAndSymptoms: this.formData.signAndSymptoms,
        otherNote: this.formData.otherNote,
        dateOfDischarge: this.formData.dateOfDischarge,
        dischargeType: this.formData.dischargeType,
        dischargeNote: this.formData.dischargeNote,
        instructionAfterDischarge: this.formData.instructionAfterDischarge,
      });
    }
  }
enableEpisodeStatus() {
    this.episodeForm.get('episodeStatus')?.enable();
  }
 
  disableEpisodeStatus() {
    this.episodeForm.get('episodeStatus')?.disable();
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.episodeForm.valid) {
      console.log('Form submitted:', this.episodeForm.value);
      this.formDataChanged.emit(this.episodeForm.value);
      this.resetForm();
    }
  }
  resetForm() {
    this.episodeForm.reset();
    this.formSubmitted = false;
  }

  dateRangeValidation(){
    const startDate = moment(this.episodeForm.value.startDate);
    const endDate = moment(this.episodeForm.value.endDate);
    // Check if startDate date is higher than endDate
    if (startDate.isAfter(endDate)) {
      this.episodeForm.get('endDate')?.setErrors({ invalid: true });
    }else{
      this.episodeForm.get('endDate')?.setErrors(null);
    }
    console.log(startDate,endDate);
    
    
  }
}