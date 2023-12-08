import { Component, Input,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search-fav',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule, RatingModule, ReactiveFormsModule],
  templateUrl: './search-fav.component.html',
  styleUrls: ['./search-fav.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
      })),
      state('expanded', style({
        height: '*',
        overflow: 'visible',
      })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],

})

export class SearchFavComponent {
  @Input() header: any;
  @Input() allData: any;
  @Output() selectedDataEvent = new EventEmitter<string>();

  @Output() radioSelectionChanged = new EventEmitter<any>();
  selectedValue: any;
  roundedValue: any;


  

  // filter medical code list
  searchTerm: string = '';
  filteredData: any[] | undefined;    
  selectedFav: any;

  filterData() {
    if (this.searchTerm) {
      this.filteredData = this.allData.filter((data: { name: string; codes: string; treatment: string; time: string; status: string; }) =>
        data.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        data.codes.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        data.treatment.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        data.time.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        data.status.toLowerCase().includes(this.searchTerm.toLowerCase())
        
      );
    } else {
      this.filteredData = this.allData;
      console.log('no data found')
    }
    console.log(this.filteredData);
  }


// Medical code Json
ngOnInit() {  
  this.filteredData = this.allData;  
}

favList: any[] = [];

  // Initial state, true for expanded, false for collapsed
  isContentExpanded = true;
  text: any;

  toggleExpandCollapse() {
    this.isContentExpanded = !this.isContentExpanded;
  }

  // favList collapse and expand
  isFavListExpanded = true;
  toggleExpandCollapseFav() {
    this.isFavListExpanded = !this.isFavListExpanded;
  }

  

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

  // on select radio button use this below code to emit the selected value 
  selectedRadioButton: any; // Ensure you have this property in your component

  onRadioButtonChange(selectedItem: any) {
    this.radioSelectionChanged.emit(selectedItem);
    console.log(selectedItem);
    
  }
}
