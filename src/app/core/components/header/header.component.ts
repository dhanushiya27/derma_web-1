import { Component } from '@angular/core';
import { CommonModule ,DatePipe} from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { SelectItem } from 'primeng/api';
import { AllappointmentComponent } from "../../../modules/dashboard/allappointment/allappointment.component";
import { SampleUiComponent } from "../../../sampleUI/sample-ui/sample-ui.component";
import { DialogService } from 'primeng/dynamicdialog';
import { ModelComponent } from 'src/app/shared/components/model/model.component';

@Component({
    selector: 'app-header',
    standalone: true,
    providers: [DatePipe],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, DropdownModule, FormsModule, ReactiveFormsModule, CalendarModule, AllappointmentComponent, SampleUiComponent]
})
export class HeaderComponent {

  cities: SelectItem[] = [
    { label: 'Derma Clinic', value: 'DC' },
    { label: 'Derma Day surgery', value: 'DD' },
    { label: 'Derma hair', value: 'DH' },
    { label: 'Derma Jeddah', value: 'DJ' },
    { label: 'Derma Light', value: 'DL' }

  ];
  date:any;
  headerForm:  FormGroup | any;
  minDateValue = new Date(); // Set your min date value as needed
  selectedBranch: string | undefined;
  branches: SelectItem[] = [];
  selectedBranchImage: string | undefined;
  role!: string;
  userRole!: string;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe , private router: Router, private dialogService : DialogService) {
    this.role = localStorage.getItem('userRole') || '';
    this.userRole = this.role == 'D' ? 'Doctor' : 'Nurse';
    console.log(this.userRole,'userRole');
    this.minDateValue = new Date(); // Set your min date value as needed
  }
  ngOnInit() {

    this.headerForm = this.formBuilder.group({
      city: [''],
      date: [new Date()]
    });

     // Convert branchUpdate array to SelectItem array
  this.branches = this.branchUpdate.map((branch:any) => ({
    label: branch.branchName,
    value: branch.branchCode
  }));
}

// Inside HeaderComponent class
onBranchChange(selectedValue: string) {
  this.selectedBranch = selectedValue;

  // Find the selected branch in the branchUpdate array
  const selectedBranch = this.branchUpdate.find((branch:any) => branch.branchCode === selectedValue);

  // Set the selected branch image
  this.selectedBranchImage = selectedBranch ? selectedBranch.branchImg : undefined;
}

goPreviousMonth() {
  const currentDate = this.headerForm.get('date').value;
  const previousMonth = new Date(currentDate);
  previousMonth.setMonth(currentDate.getMonth() - 1);
  this.headerForm.get('date').setValue(previousMonth);
}

 // Function to navigate to the next month
 goNextMonth() {
  const currentDate = this.headerForm.get('date').value;
  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(currentDate.getMonth() + 1);
  this.headerForm.get('date').setValue(nextMonth);
}

showCurrentDate() {
  this.headerForm.get('date').setValue(new Date());
}

logOut(){
  this.router.navigate(['/login']);
}

branchUpdate:any=[
  {
    "branchImg":"assets/images/header-logo.png",
    "branchCode":"123456987",
    "branchName":"Derma Clinic",
  },
  {

    "branchImg":"assets/images/branLogoOne.png",
    "branchCode":"8745454545",
    "branchName":"Derma Day surgery",
  },
  {

    "branchImg":"assets/images/branLogoTwo.png",
    "branchCode":"9652644122",
    "branchName":"Derma hair",
  }
]


  showSearchHeader(data: any, type: any) {
    // const showSearchBar = type === "searchBarShow";
    const ref = this.dialogService.open(ModelComponent, {
      header: 'Search for a Patient',
      width: '50%',
      contentStyle: { "max-height": "400px ", "overflow": "auto", },
      baseZIndex: 10000,
      style: { 'height': '400px' },
      data: {
        data: [],
        type: "searchBarShow",
        confirm: false
      }
    });
    ref.onClose.subscribe((result: any) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
