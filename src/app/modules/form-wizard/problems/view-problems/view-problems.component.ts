import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFavComponent } from 'src/app/shared/components/search-fav/search-fav.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableComponent } from "../../../../shared/components/table/table.component";
import { ProblemsComponent } from "../problems.component";
import { AddEditProblemsComponent } from "../add-edit-problems/add-edit-problems.component";
import { ProblemsListComponent } from "../problems-list/problems-list.component";
import { trigger, state, style, animate, transition } from '@angular/animations';

interface City {
  name: string;
  code: string;
}


@Component({
    selector: 'app-view-problems',
    standalone: true,
    templateUrl: './view-problems.component.html',
    styleUrls: ['./view-problems.component.scss'],
    imports: [CommonModule, RadioButtonModule, FormsModule, RatingModule, ReactiveFormsModule, SearchFavComponent, DropdownModule, CalendarModule, TableComponent, ProblemsComponent, AddEditProblemsComponent, ProblemsListComponent],
    animations: [
      trigger('expandCollapse', [
        state('collapsed', style({ height: '0', overflow: 'hidden', opacity: 0 })),
        state('expanded', style({ height: '*', overflow: 'visible', opacity: 1 })),
        transition('collapsed => expanded', animate('300ms ease-in-out')),
        transition('expanded => collapsed', animate('300ms ease-in-out'))
      ])
    ]
})

export class ViewProblemsComponent {
  selectedValue: any;
  roundedValue:any;
  selectedRadioButton: number | undefined;
  currentPage:string = "viewProblem"
  text: any;
  occurance: any[] = [{ name: 'First' }, { name: 'Inactive' }];
  tableData: any;

  
// Medical code Json
medicalCodeList:any[]=[
  {id:1,name:'CCHI Codes',codes:'10942-00-10',treatment:'Glare test',time:'',status:'',isFavourite: false,isSelected: false},
  {id:2,name:'OCCHI Codes',codes:'11000-00-00',treatment:'Electroencephalography',time:'',status:'',isFavourite: false,isSelected: false},
  {id:3,name:'CCHI Codes',codes:'11003-00-00',treatment:'Electroencephalography',time:'>=3 hours duration',status:'',isFavourite: false,isSelected: false},
  {id:4,name:'CCHI Codes',codes:'11003-00-10',treatment:'Electroencephalography',time:'>=3 hours duration',status:'Awake and drowsy',isFavourite: false,isSelected: false},
  {id:5,name:'CCHI Codes',codes:'11003-00-20',treatment:'Electroencephalography',time:'>=3 hours duration',status:'Awake and drowsy',isFavourite: false,isSelected: false},
 
];
  tableEditedData: any;
  onEdit: any;




ngOnInit(){

  this.medicalCodeList.map(data=>{
    let text:any=data.name+data.codes+"-"+data.treatment+data.time+data.status+data.isSelected+data.isFavourite;
    data["text"]=text;
    
  })
}

favList: any[] = [];

// Favourite and unfavourite the star icon
toggleFavourite(item: any) {
  item.isFavourite = !item.isFavourite;


  // Check if the item is marked as a favorite and add/remove it from the favList accordingly
  if (item.isFavourite) {
    this.favList.push(item);
  } else {
    const index = this.favList.findIndex(favItem => favItem.id === item.id);
    if (index !== -1) {
      this.favList.splice(index, 1);
    }
  }

}

// Expand Collapse for problems and problems list

  isViewProblemsListVisible: boolean = true;
  toggleViewProblemsList() {
    this.isViewProblemsListVisible = !this.isViewProblemsListVisible;
  }


  isProblemsListVisible: boolean = true;
    toggleProblemsList() {
        this.isProblemsListVisible = !this.isProblemsListVisible;
    }
    isNewProblemsListVisible:boolean=true;
    toggleNewProblemsList() {
      this.isNewProblemsListVisible = !this.isNewProblemsListVisible;
  }


  editPage:boolean=true;
  backToproblems(){
    this.currentPage=='Problems'
  }
  editTable(data: any) {
    console.log('edit table')
    this.currentPage='edit';
    this. tableEditedData=data;
    // this.onEdit.emit('edit');
    this.onEdit.emit(this.tableEditedData)

  }
  // selectedTreatment: string = '';

  selectedTreatment: any;

  handleRadioSelection(selectedItem: any) {
    // Update selectedTreatment based on the selected radio button value
    this.selectedTreatment = selectedItem;
  }
}
