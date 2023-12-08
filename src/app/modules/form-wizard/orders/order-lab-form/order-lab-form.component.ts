import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFavComponent } from "../../../../shared/components/search-fav/search-fav.component";
import { PopupFormComponent } from "../../../../shared/components/popup-form/popup-form.component";

@Component({
  selector: 'app-order-lab-form',
  standalone: true,
  templateUrl: './order-lab-form.component.html',
  styleUrls: ['./order-lab-form.component.scss'],
  imports: [CommonModule, SearchFavComponent, PopupFormComponent]
})
export class OrderLabFormComponent {
  orderLab:any[]=[
    {id:1,text:'17KSU',isFavourite: false,isSelected: false},
    {id:2,text:'17QHPR',isFavourite: false,isSelected: false},
    {id:3,text:'5HIAA',isFavourite: false,isSelected: false},
    {id:4,text:'A1AP',isFavourite: false,isSelected: false},
    {id:5,text:'A1AT',isFavourite: false,isSelected: false},
    {id:6,text:'A1ATF',isFavourite: false,isSelected: false},
    {id:7,text:'ABENA',isFavourite: false,isSelected: false},
    {id:8,text:'ABENA',isFavourite: false,isSelected: false},
    {id:9,text:'ABIDE',isFavourite: false,isSelected: false},
  ];
  option:any = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  dataNewOrder: any = [{
    title: 'New Order',
    subtitle: '17QHPR',
    formFields: [
      { name: 'Price', type: 'input', required: true, line: 1 },
      { name: 'Order Date', type: 'calendar', required: false, line: 1 },
      { name: 'Order Time', type: 'time', required: false, line: 1 },
    ],
    formFieldsline2: [],
    formFieldsline3: [{ name: 'Comment', type: 'input', required: false, line: 3 }],
  }];
  dataOrderHistroy: any = [{
    title: 'Order History',
    subtitle: 'A1ATF',
    formFields: [
      { name: 'Price', type: 'input', required: true, line: 1 },
      { name: 'Order Date', type: 'calendar', required: false, line: 1 },
      { name: 'Order Time', type: 'time', required: false, line: 1 },
    ],
    formFieldsline2: [
      { name: 'Price List', type: 'dropdown', required: false, line: 2 , option:this.option , optionValue:'code',optionLabel:'name' },
      // { name: 'Quantiy',type:'input', required: true,line:2 },
      { name: 'selector', type: 'selector', required: false, line: 2 },],
    formFieldsline3: [
      { name: 'Referral', type: 'checkbox', required: false, line: 3 },
      { name: 'Comment', type: 'input', required: false, line: 3 },
    ],
  }];
  constructor() { }
  ngOnInit() {

  }
  recivedDataHistory(event: any) {
    console.log(event, '------');

  }
  recivedDataNew(event: any) {
    console.log(event, '------');

  }
}
