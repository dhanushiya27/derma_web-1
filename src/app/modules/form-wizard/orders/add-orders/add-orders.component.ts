import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ActivatedRoute } from '@angular/router';
import { OrderMedicationFormComponent } from "../order-medication-form/order-medication-form.component";
import { OrderLabFormComponent } from "../order-lab-form/order-lab-form.component";
import { OrderClinicalFormComponent } from "../order-clinical-form/order-clinical-form.component";
import { OrderAppointmentFormComponent } from "../order-appointment-form/order-appointment-form.component";

@Component({
    selector: 'app-add-orders',
    standalone: true,
    templateUrl: './add-orders.component.html',
    styleUrls: ['./add-orders.component.scss'],
    imports: [CommonModule, TabViewModule, OrderMedicationFormComponent, OrderLabFormComponent, OrderClinicalFormComponent, OrderAppointmentFormComponent]
})
export class AddOrdersComponent {
  @Input() orderIndex: any;
  items: any = [];
  activeIndexChild: any = 0;
  activeIndex: any = 0;
  constructor() {
  }
  ngOnInit() {
    console.log(this.orderIndex, '------------------')
    if(this.orderIndex == 0){
      this.activeIndex = 1;
      this.activeIndexChild = 0;
    }else if(this.orderIndex == 1){
      this.activeIndex = 0;
    }else if(this.orderIndex == 2){
      this.activeIndex = 0;
    }else if(this.orderIndex == 3){
      this.activeIndex = 0;
    }else if(this.orderIndex == 4){
       this.activeIndex = 1;
      this.activeIndexChild = 1;
    }else if(this.orderIndex == 5){
      this.activeIndex = 2;
    }else if(this.orderIndex == 6){
      this.activeIndex = 0;
    }else{
      this.activeIndex = 0;
    }
  }
  onTabChange(event: any, type: any) {
    console.log(event, type, '--------');

  }
}
