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
  medicalCodeList:any[]=[
    {id:1,text:'Vita D 1000 IU - 60IU',isFavourite: false,isSelected: false},
    {id:2,text:'',isFavourite: false,isSelected: false},
    {id:3,text:'DIOSTAR 160 mg film-coated tablet - 30mg',isFavourite: false,isSelected: false},
    {id:4,text:'DIOSTAR 80 mg film-coated tablet - 30mg',isFavourite: false,isSelected: false},
    {id:5,text:'Eyela 40 mg/ml Solution for injection in pre-filled syringe 1mg/ml',isFavourite: false,isSelected: false},
   
  ];
}
