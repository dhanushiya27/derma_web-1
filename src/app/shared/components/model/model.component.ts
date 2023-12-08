// Developer Name : Rajaha Muthiaha 
// Module Name: Model 


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng
import { TableModule } from 'primeng/table';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule, TableModule, FormsModule, ButtonModule, RadioButtonModule],
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent {

  ListData: any;
  alertMessages: any[];
  alertRevokeMessages: any[]; 
  selectedMessage: any;
  roundedValue!: string;
  showRevokeAlert: boolean = true;
  showRevokeButtons: boolean = false;
  showAlertButtons: boolean = false;
  
  showSearchBar: boolean = false;

  searchBarShow: any;


  

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.ListData = config.data.data;
    this.alertMessages = config.data.alertMessages;
    this.alertRevokeMessages = config.data.alertRevokeMessages; // Corrected property name
  }
  
  selectMessage(message: any): void {
    this.selectedMessage = message;
  }
  
  onRevokeYesClick(): void {
    // Hide the initial alertRevokeMessage section
    this.showRevokeAlert = false;
  }
  
  onRevokeNoClick(): void {
    // Close the dialog if "No" is clicked on the initial alertRevokeMessage
    this.ref.close();
  }
  
  onYesClick(): void {
    console.log(this.config.data.type, this.config.data)
    if(this.config.data.type == "alert") {
      // open model
      console.log('in if')
      this.config.data.data = this.config.data.alertMessages;
      this.config.data.type = "alertRevoke";
    }else {
      if (this.selectedMessage) {
      this.ref.close(this.selectedMessage);
      }
    }
   
  }
  
  popupclick(item: any): void {
    console.log(`Click id ${item.id}. name: ${item.name}`);
    this.ref.close(item);
  }
  closeDialog() {

    // You can perform any additional logic here before closing the dialog

    this.ref.close();

  }
}