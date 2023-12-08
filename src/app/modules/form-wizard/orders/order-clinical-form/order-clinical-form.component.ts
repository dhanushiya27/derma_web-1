import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFavComponent } from "../../../../shared/components/search-fav/search-fav.component";
import { PopupFormComponent } from "../../../../shared/components/popup-form/popup-form.component";

@Component({
    selector: 'app-order-clinical-form',
    standalone: true,
    templateUrl: './order-clinical-form.component.html',
    styleUrls: ['./order-clinical-form.component.scss'],
    imports: [CommonModule, SearchFavComponent, PopupFormComponent]
})
export class OrderClinicalFormComponent {
  medicationList:any[]=[
    {id:1,text:'Injection using Botox Shared',isFavourite: false,isSelected: false},
    {id:2,text:'3RD Molar Extraction',isFavourite: false,isSelected: false},
    {id:3,text:'Injection using - Siax 200 IU',isFavourite: false,isSelected: false},
    {id:4,text:'Tattoo removal rejuvi',isFavourite: false,isSelected: false},
    {id:5,text:'Electric Epilation',isFavourite: false,isSelected: false},
    {id:6,text:'Electric Epilation',isFavourite: false,isSelected: false},  
  ];
}
