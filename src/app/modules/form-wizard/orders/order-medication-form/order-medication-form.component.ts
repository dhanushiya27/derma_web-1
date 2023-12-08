import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFavComponent } from "../../../../shared/components/search-fav/search-fav.component";
import { PopupFormComponent } from "../../../../shared/components/popup-form/popup-form.component";

@Component({
  selector: 'app-order-medication-form',
  standalone: true,
  templateUrl: './order-medication-form.component.html',
  styleUrls: ['./order-medication-form.component.scss'],
  imports: [CommonModule, SearchFavComponent, PopupFormComponent]
})
export class OrderMedicationFormComponent {
  medicalCodeList:any[]=[
    {id:1,text:'Vita D 1000 IU - 60IU',isFavourite: false,isSelected: false},
    {id:2,text:'',isFavourite: false,isSelected: false},
    {id:3,text:'DIOSTAR 160 mg film-coated tablet - 30mg',isFavourite: false,isSelected: false},
    {id:4,text:'DIOSTAR 80 mg film-coated tablet - 30mg',isFavourite: false,isSelected: false},
    {id:5,text:'Eyela 40 mg/ml Solution for injection in pre-filled syringe 1mg/ml',isFavourite: false,isSelected: false},
   
  ];
  dataNewOrder: any = [{
    title: 'New Order',
    subtitle: 'Envona - 10mg',
    formFields: [
      { name: 'Price', type: 'input', required: true, line: 1 },
      { name: 'Disc. Amount', type: 'input', required: false, line: 1 },
      { name: 'Disc. %', type: 'input', required: false, line: 1 },
      { name: 'Quantity', type: 'input', required: true, line: 1 },
      { name: 'Net Amount', type: 'input', required: false, line: 1 },
    ],
    formFieldsline2: [],
    formFieldsline3: [{ name: 'Comment', type: 'input', required: false, line: 3 }],
  }];
  dataOrderHistroy: any = [{
    title: 'Order History',
    subtitle: 'DIOSTAR 80 mg film-coated tablet - 30mg',
    formFields: [
      { name: 'Price', type: 'input', required: true, line: 1 },
      { name: 'Disc. Amount', type: 'input', required: false, line: 1 },
      { name: 'Disc. %', type: 'input', required: false, line: 1 },
      { name: 'Quantity', type: 'input', required: true, line: 1 },
      { name: 'Net Amount', type: 'input', required: false, line: 1 },
    ],
    formFieldsline2: [],
    formFieldsline3: [{ name: 'Comment', type: 'input', required: false, line: 3 }],
  }];
  constructor() { }
  ngOnInit() {
    console.log(this.dataOrderHistroy, 'po');

  }
  recivedDataHistory(event: any) {
    console.log(event, '------');

  }
  recivedDataNew(event: any) {
    console.log(event, '------');

  }
}
