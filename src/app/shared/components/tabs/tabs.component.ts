import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from "../table/table.component";
@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [CommonModule, TabViewModule, TableComponent,TooltipModule]
})
export class TabsComponent {
  @Input() tabDetails: any;
  @Input() header: any;
  @Output() tabSelection = new EventEmitter<any>();
  @Output() actionClicked = new EventEmitter<void>();
  activeIndex: any;

  ngOnInit() {
    this.activeIndex = this.tabDetails[0];
    console.log(this.header);
    
  }
  onTabChange(event: any) {
    console.log(event, '--------------------');
    this.tabSelection.emit(event?.index);
  }
  editVitals(data: any) {
    console.log(data)

  }
  viewVitals(data: any) {
    console.log(data);

  }
  actionBtn(event:any){
    this.actionClicked.emit(event);
    console.log("hiii");
    console.log(event);  
  }
}
