import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from "../../../shared/components/tabs/tabs.component";
import { ButtonModule } from 'primeng/button';
import { ModelComponent } from 'src/app/shared/components/model/model.component';

import { DialogService } from 'primeng/dynamicdialog';
import { AddOrdersComponent } from "./add-orders/add-orders.component";

@Component({
    selector: 'app-orders',
    standalone: true,
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    imports: [CommonModule, TabsComponent, ButtonModule, ModelComponent, AddOrdersComponent]
})
export class OrdersComponent {
    addFlag: boolean = false;
    indexValue: any = 0;
    items: any = [];
    showAdditionalButtons = false;
    colsMedication = [
        { field: 'MedicationID', data: 'MedicationID', header: 'Medication ID', needSort: false, display: true },
        { field: 'MedicationName', data: 'MedicationName', header: 'Medication Name', needSort: false, display: true },
        { field: 'ScientificName', data: 'ScientificName', header: 'Scientific Name', needSort: false, display: true },
        { field: 'Orderedby', data: 'Orderedby', header: 'Ordered by', needSort: false, display: true },
        { field: 'Date', data: 'Date', header: 'Date', needSort: false, display: true },
        { field: 'Time', data: 'Time', header: 'Time', needSort: false, display: true },
        { field: 'DosageQuantity', data: 'DosageQuantity', header: 'Dosage Quantity', needSort: false, display: true },
        { field: 'Period', data: 'Period', header: 'Period', needSort: false, display: true },
        { field: 'DosageForm', data: 'DosageForm', header: 'Dosage Form', needSort: false, display: true },
        { field: 'Route', data: 'Route', header: 'Route', needSort: false, display: true },
        { field: 'Episode', data: 'Episode', header: 'Episode', needSort: false, display: true },
        { field: 'BillingStatus', data: 'BillingStatus', header: 'Billing Status', needSort: false, display: true },
        { field: 'action', data: 'action', header: 'Actions', needSort: false, display: true },
    ];
    medication = [
        {
            MedicationID: 'PRA-2023-53890',
            MedicationName: '86-24-86',
            ScientificName: 'Isotretinoin',
            Orderedby: 'Mustafa Chabbar',
            Date: '2023-07-20',
            DosageQuantity: '1',
            Period: '10 Week',
            Route: 'Oral',
            Time: '11:15:00',
            BillingStatus: 'sr',
            action: 'none',
        },
        {
            MedicationID: 'PRA-2023-53891',
            MedicationName: '86-24-87',
            ScientificName: 'Fosaprepitant Dimeglumine',
            Orderedby: 'Mustafa Chabbar',
            Date: '2023-07-20',
            DosageQuantity: '1',
            Period: '10 Week',
            Route: 'Intravenous',
            Time: '11:15:00',
            BillingStatus: 'sr',
            action: 'none',
        }
    ];
    colsLab: any = [
        { field: 'LabID', data: 'LabID', header: 'Lab ID', needSort: false, display: true },
        { field: 'TestName', data: 'TestName', header: 'Test Name', needSort: false, display: true },
        { field: 'Orderedby', data: 'Orderedby', header: 'Ordered by', needSort: false, display: true },
        { field: 'Date', data: 'Date', header: 'Date', needSort: false, display: true },
        { field: 'Time', data: 'Time', header: 'Time', needSort: false, display: true },
        { field: 'Episode', data: 'Episode', header: 'Episode', needSort: false, display: true },
        { field: 'BillingStatus', data: 'BillingStatus', header: 'Billing Status', needSort: false, display: true },
        { field: 'action', data: 'action', header: 'Actions', needSort: false, display: true },
    ];
    lab: any = [
        {
            LabID: 'LT-2023-04443',
            TestName: 'CBC',
            Orderedby: 'Mustafa Chabbar',
            Date: '2023-07-20',
            Time: '11:15:00',
            BillingStatus: 'sr',
            action: 'none',
        },
        {
            LabID: 'LT-2023-04444',
            TestName: 'CHOL',
            Orderedby: 'Mustafa Chabbar',
            Date: '2023-07-20',
            Time: '11:15:00',
            BillingStatus: 'sr',
            action: 'none',
        }
    ];
    colsRadiology: any = [
        { field: 'RadID', data: 'RadID', header: 'Rad ID', needSort: false, display: true },
        { field: 'RadiologyName', data: 'RadiologyName', header: 'Radiology Name', needSort: false, display: true },
        { field: 'Orderedby', data: 'Orderedby', header: 'Ordered by', needSort: false, display: true },
        { field: 'Date', data: 'Date', header: 'Date', needSort: false, display: true },
        { field: 'Time', data: 'Time', header: 'Time', needSort: false, display: true },
        { field: 'Episode', data: 'Episode', header: 'Episode', needSort: false, display: true },
        { field: 'BillingStatus', data: 'BillingStatus', header: 'Billing Status', needSort: false, display: true },
        { field: 'action', data: 'action', header: 'Actions', needSort: false, display: true },
    ];
    radiology: any = [
        {
            RadID: 'RAD-2023-2587',
            RadiologyName: 'X-Ray  ',
            Orderedby: 'Mustafa Chabbar',
            Date: '2023-07-20',
            Time: '11:15:00',
            BillingStatus: 'sr',
            action: 'none',
        },
        {
            RadID: 'RAD-2023-0255',
            RadiologyName: 'CT Scan',
            Orderedby: 'Mustafa Chabbar',
            Date: '2023-07-20',
            Time: '11:16:00',
            BillingStatus: 'sr',
            action: 'none',
        }
    ];
    colsProcedures: any = [
        { field: 'ProcedureID', data: 'ProcedureID', header: 'Procedure ID', needSort: false, display: true },
        { field: 'ProcedureName', data: 'ProcedureName', header: 'Procedure Name', needSort: false, display: true },
        { field: 'RequestedPractitioner', data: 'RequestedPractitioner', header: 'Requested Practitioner', needSort: false, display: true },
        { field: 'Date', data: 'Date', header: 'Date', needSort: false, display: true },
        { field: 'Time', data: 'Time', header: 'Time', needSort: false, display: true },
        { field: 'status', data: 'status', header: 'Status', needSort: false, display: true },
        { field: 'Episode', data: 'Episode', header: 'Episode', needSort: false, display: true },
        { field: 'Comments', data: 'Comments', header: 'Comments', needSort: false, display: true },
        { field: 'Price', data: 'Price', header: 'Price', needSort: false, display: true },
        { field: 'BillingStatus', data: 'BillingStatus', header: 'Billing Status', needSort: false, display: true },
        { field: 'action', data: 'action', header: 'Actions', needSort: false, display: true },
    ];
    procedures: any = [
        {
            ProcedureID: 'HLC-CPR-2023-40434',
            ProcedureName: 'Inject using -Botox ',
            RequestedPractitioner: 'Mustafa Chabbar',
            Date: '2023-07-20',
            Time: '11:15:00',
            status: 'Ordered',
            Price: '2000 ',
            BillingStatus: 'sr',
            action: 'Action',
        },
        {
            ProcedureID: 'HLC-CPR-2023-40434',
            ProcedureName: 'Inject using -Botox ',
            RequestedPractitioner: 'Mustafa Chabbar',
            Date: '2023-07-20',
            Time: '11:15:00',
            status: 'Revoked',
            Price: '2000 ',
            BillingStatus: 'sr',
            action: 'none',
        }
    ];
    colsAppointments: any = [
        { field: 'AppointmentName', data: 'AppointmentName', header: 'Appointment Name', needSort: false, display: true },
        { field: 'Orderedby', data: 'Orderedby', header: 'Ordered by', needSort: false, display: true },
        { field: 'RequestedPractitioner', data: 'RequestedPractitioner', header: 'Requested Practitioner', needSort: false, display: true },
        { field: 'OrderedDate', data: 'OrderedDate', header: 'OrderedDate', needSort: false, display: true },
        { field: 'status', date: 'status', header: 'Order Status', needSort: false, display: true },
        { field: 'action', data: 'action', header: 'Actions', needSort: false, display: true },
    ];
    appointments: any = [
        {
            AppointmentName: 'Free Follow-uP 10m',
            Orderedby: 'Mustafa Chabbar',
            RequestedPractitioner: 'Mustafa Chabbar',
            OrderedDate: '2023-07-20',
            status: 'Ordered',
            action: 'none',
        },
    ];
    constructor(public dialogService: DialogService) { }
    ngOnInit() {
        this.items = [
            { pageTitle: 'Medication Orders', imgHeader: '../../../assets/icons/orderMedicine.svg', tableData: this.medication, cols: this.colsMedication },
            { pageTitle: 'Package Orders', imgHeader: '../../../assets/icons/orderReport.svg' },
            { pageTitle: 'Lab Orders', imgHeader: '../../../assets/icons/orderLab.svg', tableData: this.lab, cols: this.colsLab },
            { pageTitle: 'Radiology Orders', imgHeader: '../../../assets/icons/orderRadiology.svg', tableData: this.radiology, cols: this.colsRadiology },
            { pageTitle: 'Procedure Orders', imgHeader: '../../../assets/icons/orderHand.svg', tableData: this.procedures, cols: this.colsProcedures },
            { pageTitle: 'Appointment Orders', imgHeader: '../../../assets/icons/orderAppointment.svg', tableData: this.appointments, cols: this.colsAppointments },
            { pageTitle: 'Insurance Orders', imgHeader: '../../../assets/icons/orderSheild.svg' },
            { pageTitle: 'All Orders', imgHeader: '../../../assets/icons/orderFilter.svg' }
        ];
    }
    headerChange(index: any) {
        this.indexValue = index;
        console.log(index, 'parent-----------');
        this.showAdditionalButtons = false;
    }
    addOrders(type: any) {
        console.log('-----------');
        if (type == 'add') {
            this.addFlag = true;
        } else if (type == 'back') {
            this.addFlag = false;
            this.indexValue = 0;
        }

    }
    actionOrders(event: any) {
        this.showAdditionalButtons = !this.showAdditionalButtons;
        console.log("statusss:",event.status);
         let procedureDetails = {
              "Id": event.ProcedureID,
              "Name": event.ProcedureName,
              "Practitioner": event.RequestedPractitioner,
              "Date": event.Date,
              "Time": event.Time,
              "Status": event.status,
            };
            console.log(procedureDetails, 'procedureDetails');
    }
      alertMessage: any[] = [
        {
          id: '1',
          name: '1 - Order was placed in error and needs to be corrected',
          icon: '',
          textBold: 'true',
          display: 'true',
        },
        {
          id: '2',
          name: '2 - Order is no longer necessary or relevant',
          icon: '',
          textBold: 'true',
          display: 'true',
        },
        {
          id: '3',
          name: '3 - Order was duplicated and needs to be removed',
          icon: '',
          textBold: 'true',
          display: 'true',
        },
        {
          id: '4',
          name: '4 - Patient’s condition has changed and order needs to be modifiedied',
          icon: '',
          textBold: 'true',
          display: 'true',
        },
        {
          id: '5',
          name: '5 - Patient experienced an adverse reaction and order needs to be Stopped',
          icon: '',
          textBold: 'true',
          display: 'true',
        },
      ];
      alertRevokeMessage: any = [{ name: 'Are you sure you want to Revoke ?' }];
      showAlert(data: any, type: any) { 
        const ref = this.dialogService.open(ModelComponent, {
          header: 'Alert',
          width: '50%',
          contentStyle: { 'max-height': '400px ', overflow: 'auto' },
          baseZIndex: 10000,
          // style: { 'height': '400px' },
          data: {
            alertMessages: this.alertMessage,
            data: this.alertRevokeMessage,
            showRevokeAlert: true,
            type: 'alert',
            confirm: true,
          },
        });
        ref.onClose.subscribe((result: any) => {
            this.showAdditionalButtons = false;
            console.log('Dialog closed with result:', result);
            this.procedures.status == 'Revoked';
            // console.log('After status update:', this.procedures.status);
            });
      }
}