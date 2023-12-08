import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewProblemsComponent } from './view-problems/view-problems.component';
import { TableComponent } from "../../../shared/components/table/table.component";
import { AddEditProblemsComponent } from "./add-edit-problems/add-edit-problems.component";
import { ProblemsListComponent } from "./problems-list/problems-list.component";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-problems',
    standalone: true,
    templateUrl: './problems.component.html',
    styleUrls: ['./problems.component.scss'],
    imports: [CommonModule, ViewProblemsComponent, TableComponent, AddEditProblemsComponent, ProblemsListComponent],
    animations: [
      trigger('expandCollapse', [
        state('collapsed', style({ height: '0', overflow: 'hidden', opacity: 0 })),
        state('expanded', style({ height: '*', overflow: 'visible', opacity: 1 })),
        transition('collapsed => expanded', animate('300ms ease-in-out')),
        transition('expanded => collapsed', animate('300ms ease-in-out'))
      ])
    ]
    
})
export class ProblemsComponent {
  
  
  onUpdate() {
    throw new Error('Method not implemented.');
  }

  showEditPage(event: any) {
    console.log('in edit')
    this.currentPage='edit'
  }


  currentPage:string = "view";
  
  problemsPage() {
    this.currentPage='view'
  }
  
  constructor(private router: Router) {}


  backToproblems() {
    this.currentPage='view'
    }
  navigateToViewProblems() {
   this.currentPage = "search"
  }
 
  
  isProblemsListVisible: boolean = true;

  // Expand and collapse
  toggleProblemsList() {
      this.isProblemsListVisible = !this.isProblemsListVisible;
  }

  
}
