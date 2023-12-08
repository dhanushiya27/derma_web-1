// Developer Name : Dhanushiya
// Module Name: Profile-header
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule,RouterModule,ButtonModule],
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {
  userDetails :any
  constructor(private router: Router,private location: Location) {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
  }
  ngOnInit() {
  }

 
homePage(){
  console.log("logged");
  this.router.navigate(['all-appointment']);
}
goBack() {
  this.location.back();
}
}
