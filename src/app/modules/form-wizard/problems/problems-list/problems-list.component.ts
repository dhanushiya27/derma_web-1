import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../../shared/components/table/table.component";
import { Router } from '@angular/router';
import { AddEditProblemsComponent } from "../add-edit-problems/add-edit-problems.component";

@Component({
    selector: 'app-problems-list',
    standalone: true,
    templateUrl: './problems-list.component.html',
    styleUrls: ['./problems-list.component.scss'],
    imports: [CommonModule, TableComponent, AddEditProblemsComponent]
})
export class ProblemsListComponent {

  @Output() onEdit = new EventEmitter<any>();

  tableEditedData: any;
  constructor(private router: Router) {}
  currentPage:string = "list"

 

  cols =[
    { field : 'date', date : 'date', header: 'Date',needSort: false, display : true},
    { field : 'title',date : 'title', header: 'Medical Code /Description',needSort: false, display : true},
    { field : 'status',date : 'status', header: 'Status',needSort: false, display : true},
    { field : 'creator',date : 'creator', header: 'Creator',needSort: false, display : true},
    { field : 'action',date : 'action', header: '',needSort: false, display : true},
  ];
  tableData = [
    {
      date : '08/7/2023',title : 'Wrinkles Neck',status : 'Active',creator : 'Hashim',action : 'edit',occurance:'',outcome:'',problemType:'',severity:''
    },
    {
      date : '11/19/2023',title : 'Laxity Skin Arms',status : 'Active',creator : 'Nixpend Practitioner',action : 'edit',occurance:'First',outcome:'',problemType:'',severity:''
    },
    {
      date : '05/19/2023',title : 'Hair Transplant',status : 'Active',creator : 'Nixpend Practitioner',action : 'edit',occurance:'First',outcome:'Improved',problemType:'Primary',severity:'Mild to moderate'
    },
    {
      date : '12/21/2023',title : 'Dermatitis, atopic',status : 'Removed',creator : 'Nixpend Practitioner',action : 'edit',occurance:'First',outcome:'',problemType:'Principal',severity:'Mild '
    },
    {
      date : '08/23/2023',title : 'AGA Unmasked by TE',status : 'Inactive',creator : 'Nixpend Practitioner',action : 'edit',occurance:'',outcome:'',problemType:'',severity:''
    }
  ]

  editProblems(data: any) {
    console.log("hii", data);
    this.currentPage='edit';
    this. tableEditedData=data;
    // this.onEdit.emit('edit');
  }
  }
