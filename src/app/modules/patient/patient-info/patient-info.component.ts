import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-info',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent {
  constructor(private router:Router ,private route: ActivatedRoute){}
  
// nav to all appointments
  navToAllappointments(){
    this.router.navigate(['/all-appointment'])
  }
  appoinmentsDetails(){
    this.router.navigate(['/appoinments-details'])
  }

  // comment section update
  typedComment: string = '';
  comments: string[] = [];
  addComment() {
    if (this.typedComment.trim() !== '') {
      this.comments.push(this.typedComment);
      this.typedComment = '';
    }
  }


  selectedData: any;


  ngOnInit(): void {
    // Subscribe to route parameters to get the selected data
    this.route.params.subscribe(params => {
      this.selectedData = params['data'];
    });
  }

}
