// Developer Name : Varsha 
// Module Name: All Appointment

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { HeaderComponent } from "../../../core/components/header/header.component";
import { PractitionerComponent } from './practitioner/practitioner.component';

//Primeng
import { DialogService } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';


@Component({
    selector: 'app-allappointment',
    standalone: true,
    templateUrl: './allappointment.component.html',
    styleUrls: ['./allappointment.component.scss'],
    imports: [CommonModule, CardModule, ButtonModule, HeaderComponent,
              TabViewModule,FormsModule,RouterModule,TooltipModule]
})

export class AllappointmentComponent {
  isvip:boolean=true;
  isMale:boolean=true;
  isPerson:boolean=true;
  isEncounter:boolean=true;
  isRemainder:boolean=true;
  isTimeShown:boolean=true;
  searchTerm: string = '';
  completed:any;
  inProgress:any;
  arrived:any;
  scheduled:any;
  noShow:any;
  selectedTab: string | null = null;
  nameSortOrder: 'asc' | 'desc' = 'asc';
  timeSortOrder: 'asc' | 'desc' = 'asc';
  isAllAppointmentsActive = true;
  isPractitionerAppointmentsActive = false;
  isTimeActive = false;
  isNameActive = false;
  isSortOrderTime = true;
  isSortOrderName = true;
  role!: string;
  userRole!: string;

  setActiveTab(tab: string): void {
    if (tab === 'all') {
      this.isAllAppointmentsActive = true;
      this.isPractitionerAppointmentsActive = false;
    } else if (tab === 'practitioner') {
      this.isAllAppointmentsActive = false;
      this.isPractitionerAppointmentsActive = true;
    }
  }


  invoiceStatus:any = {
    SrIconRed: "assets/icons/SrIcon-red.svg",
    SrIconGreen: "assets/icons/SrIcon-green.svg",
    SrIconGray: "assets/icons/SrIcon-gray.svg",
  }
  getInvoiceStatusIcon(paymentStatus: string | undefined): string {
    if (!paymentStatus) {
      return this.invoiceStatus.SrIconGray;
    } else if (paymentStatus === "pending") {
      return this.invoiceStatus.SrIconRed;
    } else if (paymentStatus === "paid") {
      return this.invoiceStatus.SrIconGreen;
    } else {
      return this.invoiceStatus.SrIconGray;
    }
  }

  appointmentStatus: any = {
    Scheduled: "assets/icons/Scheduled.svg",
    Open: "assets/icons/open.svg",
    Arrived: "assets/icons/Waiting.svg",
    InProgress: "assets/icons/docGreen.svg",
    Completed: "assets/icons/completed.svg",
    NoShow: "assets/icons/Not Showed.svg",
  };

  insuranceStatus: any = {
    NoInsurance: "assets/icons/Cover.svg",
    ValidInsurance: "assets/icons/validInsurance.svg",
  };

  appointmentConfirmationStatus: any = {
    Confirmed:"assets/icons/Arrived.svg",
    NotConfirmed: "assets/icons/Arrived-red.svg",
  };

  subscriptionStatus: any = {
    Subscribed: "assets/icons/Subscriptions-green.svg",
    NotSubscribed: "assets/icons/Subscriptions.svg",
  };

  constructor(public dialogService: DialogService, private router: Router){
    this.role = localStorage.getItem('userRole') || '';
    this.userRole = this.role == 'D' ? 'Doctor' : 'Nurse';
    console.log(this.userRole,'userRole111');
  }
  show(data: any,type:any) {
    const ref = this.dialogService.open(PractitionerComponent, {
           header: 'Practitioner',
           width: '50%',
           contentStyle: {"max-height": "400px ", "overflow": "auto", },
           baseZIndex: 10000,
           style: { 'height': '500px' }
       });
   }
                                
   showEncounter(data: any, type: any) {
      if(data.appointmentStatus === 'InProgress' && data.encounterBtn === 'Documentation Wizard'){
        this.docWizard(data);
      }
      if (data.appointmentStatus === 'Arrived') {
        data.appointmentStatus = 'InProgress';
        data.encounterIcon = 'assets/icons/doc-wizard-white.svg';
        if (data.encounterBtn === 'New Encounter') {
          data.encounterBtn = 'Documentation Wizard';
        }
      }
    }

  ngOnInit(){
    this.getCompletedCount();
    this.getInProgressCount();
    this.getArrivedCount();
    this.getScheduledAndOpenCount();
    this.getNoShowCount();
  }

  allAppointmentData:any=[
    {
      "isMale":true,
      "profileImg":"assets/images/personImg1.svg",
      "age":"36-38",
      "profDescNameE":"Ahmad Al Mazyd",
      "profDescNameA":"المزيداحمد المزيد",
      "profDesc":"PAT - 564754",
      "paymentStatus": "paid", //Filter starts
      "appointmentStatus": "Arrived",
      "insuranceStatus": "NoInsurance",
      "appointmentConfirmationStatus": "Confirmed",
      "subscriptionStatus": "NotSubscribed", //Filter ends
      "isPerson": true,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": true,
      "isEncounter":true,
      "encounterBtn":"New Encounter",
      "doctorName":"Mohammed Turkmani",
      "opDetails":"2545677",
      "calendarDetails":"2023-08-01 - 14:00:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":true,
      "time1":"09:37:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":false,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
    {
      "isMale":true,
      "profileImg":"assets/images/personImg2.svg",
      "age":"14-5",
      "profDescNameE":"Mohammad Abbas",
      "profDescNameA":"محمد عباس",
      "profDesc":"PAT - 854575",
      "paymentStatus": "pending",
      "appointmentStatus": "Open",
      "insuranceStatus": "ValidInsurance",
      "appointmentConfirmationStatus": "NotConfirmed",
      "subscriptionStatus": "Subscribed",
      "isPerson": false,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": false,
      "isEncounter":false,
      "encounterBtn":"New Encounter",
      "doctorName":"Mohammed Turkmani",
      "opDetails":"2545677",
      "calendarDetails":"2023-10-01 - 12:00:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":false,
      "time1":"11:50:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":true,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
    {
      "isMale":false,
      "profileImg":"assets/images/personImg4.svg",
      "age":"68-3",
      "profDescNameE":"Sherifa",
      "profDescNameA":"شريفة",
      "profDesc":"PAT - 758475",
      "paymentStatus": "pending",
      "appointmentStatus": "Arrived",
      "insuranceStatus": "NoInsurance",
      "appointmentConfirmationStatus": "Confirmed",
      "subscriptionStatus": "Subscribed",
      "isPerson": false,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": false,
      "isEncounter":true,
      "encounterBtn":"New Encounter",
      "doctorName":"Abrar Emaad",
      "opDetails":"2545677",
      "calendarDetails":"2023-01-01 - 11:00:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":true,
      "time1":"02:37:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":true,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
    {
      "isMale":true,
      "profileImg":"assets/images/personImg3.svg",
      "age":"72-8",
      "profDescNameE":"Mohammad Majid",
      "profDescNameA":"محمد ماجد",
      "profDesc":"PAT - 7854545",
      "paymentStatus": "",
      "appointmentStatus": "InProgress",
      "insuranceStatus": "ValidInsurance",
      "appointmentConfirmationStatus": "Confirmed",
      "subscriptionStatus": "NotSubscribed",
      "isPerson": false,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": false,
      "isEncounter":false,
      "encounterBtn":"New Encounter",
      "doctorName":"Abbas Yassin",
      "opDetails":"2754151",
      "calendarDetails":"2023-08-09 - 15:00:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":true,
      "time1":"05:37:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":false,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },

    {
      "isMale":true,
      "profileImg":"assets/images/personImg1.svg",
      "age":"36-38",
      "profDescNameE":"Azaar Ali Khan",
      "profDescNameA":"المزيداحمد المزيد",
      "profDesc":"PAT - 984754",
      "paymentStatus": "paid", //Filter starts
      "appointmentStatus": "Completed",
      "insuranceStatus": "NoInsurance",
      "appointmentConfirmationStatus": "Confirmed",
      "subscriptionStatus": "NotSubscribed", //Filter ends
      "isPerson": true,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": true,
      "isEncounter":false,
      "encounterBtn":"New Encounter",
      "doctorName":"Mohammed Turkmani",
      "opDetails":"2545677",
      "calendarDetails":"2023-08-30 - 02:00:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":true,
      "time1":"09:37:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":false,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
    {
      "isMale":true,
      "profileImg":"assets/images/personImg2.svg",
      "age":"14-5",
      "profDescNameE":"Mohammad Ali",
      "profDescNameA":"محمد عباس",
      "profDesc":"PAT - 9854575",
      "paymentStatus": "pending",
      "appointmentStatus": "NoShow",
      "insuranceStatus": "ValidInsurance",
      "appointmentConfirmationStatus": "Confirmed",
      "subscriptionStatus": "Subscribed",
      "isPerson": false,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": false,
      "isEncounter":false,
      "encounterBtn":"New Encounter",
      "doctorName":"Mohammed Turkmani",
      "opDetails":"2545677",
      "calendarDetails":"2023-12-07 - 14:20:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":false,
      "time1":"11:50:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":true,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
    {
      "isMale":false,
      "profileImg":"assets/images/personImg4.svg",
      "age":"68-3",
      "profDescNameE":"Zahana",
      "profDescNameA":"شريفة",
      "profDesc":"PAT - 7999475",
      "paymentStatus": "pending",
      "appointmentStatus": "Open",
      "insuranceStatus": "NoInsurance",
      "appointmentConfirmationStatus": "NotConfirmed",
      "subscriptionStatus": "Subscribed",
      "isPerson": false,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": false,
      "isEncounter":false,
      "encounterBtn":"New Encounter",
      "doctorName":"Abrar Emaad",
      "opDetails":"2545677",
      "calendarDetails":"2023-05-09 - 12:00:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":true,
      "time1":"02:37:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":true,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
    {
      "isMale":true,
      "profileImg":"assets/images/personImg3.svg",
      "age":"72-8",
      "profDescNameE":"Mohammad Khalid",
      "profDescNameA":"محمد ماجد",
      "profDesc":"PAT - 9784545",
      "paymentStatus": "",
      "appointmentStatus": "Scheduled",
      "insuranceStatus": "ValidInsurance",
      "appointmentConfirmationStatus": "Confirmed",
      "subscriptionStatus": "NotSubscribed",
      "isPerson": false,
      "multiIcon":"assets/icons/NoPerson.svg",
      "vipIcon":"assets/icons/vipIcon.svg",
      "isvip": false,
      "isEncounter":false,
      "encounterBtn":"New Encounter",
      "doctorName":"Abbas Yassin",
      "opDetails":"2754151",
      "calendarDetails":"2023-01-05 - 15:31:00",
      "clockIcon":"assets/icons/clockIcon.svg",
      "isTimeShown":true,
      "time1":"05:37:42 - ",
      "time2":" 1:37 ",
      "docDescIcon1":"assets/icons/Note.svg",
      "docDescIcon2":"assets/icons/vitalHeart.svg",
      "docDescIcon3":"assets/icons/Timeline.svg",
      "docDescIcon4":"assets/icons/notedesc.svg",
      "docDescIcon5":"assets/icons/careIcon.svg",
      "isRemainder":false,
      "remainderIcon":"assets/images/remainder.png",
      "remainder":"Next follow up two weeks later"
    },
  ]

  //Search 
  originalAppointmentData: any[] = [...this.allAppointmentData];

  filterAppointments() {
    if (!this.originalAppointmentData.length) {
      this.originalAppointmentData = [...this.allAppointmentData];
    }
  
    const filteredData = this.originalAppointmentData.filter((appointment: { profDescNameE: string; profDescNameA: string; profDesc: string; }) => {
      const searchLower = this.searchTerm.toLowerCase();
      return (
        appointment.profDescNameE.toLowerCase().includes(searchLower) ||
        appointment.profDescNameA.toLowerCase().includes(searchLower) ||
        appointment.profDesc.toLowerCase().includes(searchLower)
      );
    });
  
    this.allAppointmentData = filteredData;
  }
  
  clearSearch() {
    this.searchTerm = '';
    this.filterAppointments();
  }
  onSearch() {
    this.filterAppointments();
  }

  //Name sorting
  toggleNameSortOrder() {
      this.isSortOrderName = !this.isSortOrderName;
      this.nameSortOrder = this.nameSortOrder === 'asc' ? 'desc' : 'asc';
      this.sortAppointmentsByName();
  }

    sortAppointmentsByName() {
        this.allAppointmentData.sort((a:any, b:any) => {
            const nameA = a.profDescNameE.toLowerCase();
            const nameB = b.profDescNameE.toLowerCase();

            if (this.nameSortOrder === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });
    }

    //Time sorting
     toggleTimeSortOrder() {
         this.isSortOrderTime = !this.isSortOrderTime;
         this.timeSortOrder = this.timeSortOrder === 'asc' ? 'desc' : 'asc';
         this.sortAppointmentsByTime();
     }
     sortAppointmentsByTime() {
         this.allAppointmentData.sort((a: any, b: any) => {
             const timeA = a.calendarDetails.toLowerCase();
             const timeB = b.calendarDetails.toLowerCase();
     
             if (this.timeSortOrder === 'asc') {
                 return timeA.localeCompare(timeB);
             } else {
                 return timeB.localeCompare(timeA);
             }
         });
     }


    onTabClick(tabName: string) {
      this.selectedTab = tabName;
      if (this.selectedTab === 'All') {
        this.allAppointmentData = this.originalAppointmentData;
      } 
      else if (this.selectedTab === 'Completed'){
        this.allAppointmentData = this.completed;
      }
      else if (this.selectedTab === 'InProgress'){
        this.allAppointmentData = this.inProgress;
      }
      else if (this.selectedTab === 'Arrived'){
        this.allAppointmentData = this.arrived;
      }
      else if (this.selectedTab === 'ScheduledAndOpen'){
        this.allAppointmentData = this.scheduled;
      }
      else if (this.selectedTab === 'NoShow'){
        this.allAppointmentData = this.noShow;
      }
    }

    onTotalCardCountClick() {
      this.selectedTab = 'TotalCardCount'; 
    }

    onScheduledAndOpenClick() {
      this.selectedTab = 'ScheduledAndOpen'; 
    }


    getCompletedCount(){
      this.completed = this.originalAppointmentData.filter((item: { appointmentStatus: string; }) => item.appointmentStatus === 'Completed');
    }
    getInProgressCount(){
      this.inProgress = this.originalAppointmentData.filter((item: { appointmentStatus: string; }) => item.appointmentStatus === 'InProgress');
    }
    getArrivedCount(){
      this.arrived = this.originalAppointmentData.filter((item: { appointmentStatus: string; }) => item.appointmentStatus === 'Arrived');
    }
    getScheduledAndOpenCount(){
      this.scheduled = this.originalAppointmentData.filter((item: { appointmentStatus: string; }) => item.appointmentStatus === 'Scheduled' || item.appointmentStatus === 'Open');
    }
    getNoShowCount(){
      this.noShow = this.originalAppointmentData.filter((item: { appointmentStatus: string; }) => item.appointmentStatus === 'NoShow')
    }

    docWizard(data: any) {
      this.router.navigate(['/document-wizard']);
      let userDetails = {
        "Icon": data.profileImg,
        "VIP" : data.isvip,
        "NameE": data.profDescNameE,
        "NameA": data.profDescNameA,
        "Age": data.age,
        "Id": data.profDesc,
        "Male":data.isMale
      };
    
      console.log(userDetails, 'userDetails');
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    navToPatientInfo(selectedData:any){
      console.log(selectedData)
      this.router.navigate(['/patient-info', { data: selectedData }])
    }
}
