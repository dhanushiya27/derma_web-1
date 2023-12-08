import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-sample-ui',
  standalone: true,
  imports: [CommonModule, ButtonModule ,InputTextModule,TableModule,CheckboxModule,DropdownModule,FormsModule,
    InputTextareaModule,RadioButtonModule,ToggleButtonModule],
  templateUrl: './sample-ui.component.html',
  styleUrls: ['./sample-ui.component.scss']
  
})

export class SampleUiComponent {
  cities: any = [];
  selectedCity!: City;
  selectedValue!: string;
  roundedValue!:string;
  city!: string;
  product:any;
  checked2: boolean = true;
  isActive: boolean = false;
  
  constructor() {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];


 this.product = [  
   {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
  },
]


}


toggle() {
  this.isActive = !this.isActive;
}

}
