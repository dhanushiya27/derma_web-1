import { Component, Input,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  //read input details from parent component
  @Input() header: any;
  @Input() design: any;
  @Input() columns: any;
  @Input() tableData: any;
  @Output() editDataEvent = new EventEmitter<string>();
  @Output() actionClicked = new EventEmitter<any>();
 
  //dhanushiya
  @Output() viewDataEvent = new EventEmitter<string>();
  report(data:any){
    console.log("view clicked");
    this.viewDataEvent.emit(data);
  }
  //get values for edit
  edit(data: any) {
    console.log(data)
    this.editDataEvent.emit(data);
  }
  clickAction(event:any) {
    this.actionClicked.emit(event);
  }
  
}
