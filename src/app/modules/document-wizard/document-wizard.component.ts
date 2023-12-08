import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from 'src/app/shared/components/profile-header/profile-header.component';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-wizard',
  standalone: true,
  imports: [CommonModule, ProfileHeaderComponent,TableModule],
  templateUrl: './document-wizard.component.html',
  styleUrls: ['./document-wizard.component.scss']
})
export class DocumentWizardComponent {
icon: any;
  constructor(private router: Router) {}

  navigateToFormWizard(data:any) {
    this.router.navigateByUrl('/form-wizard', {
      state: {
        data: data,
      }
    });
  }

 

  cardDetails: any[] = [
    {
      id: 1,
      icon: "assets/icons/episodes.svg",
      header: 'Episodes',
      iconOtr: [{ icon: "assets/icons/plusIcon.svg" }, { icon: "assets/icons/expandIcon.svg" }],
      details: [
        { title: 'Hair Transplant', date: '2023/11/10', status: 'Active' }
      ]
        
    },
    {
      id: 2,
      icon: "assets/icons/medicine.svg",
      
      header: 'Medications',
      iconOtr: [{ icon: "assets/icons/plusIcon.svg" }, { icon: "assets/icons/expandIcon.svg" }],
      userStatus: [
        { status: 'Active', id: '1',name:'' }
      ],
      details: [
        { title: 'Envona-10mg', date: '2023/11/10', status: 'Active' }
      ]
        
    },
    {
      id: 3,
      icon: "assets/icons/problems.svg",
      
      header: 'Problems',
      iconOtr: [{ icon: "assets/icons/plusIcon.svg" }, { icon: "assets/icons/expandIcon.svg" }],

      details: [
        { title: 'Acne Excoriactica', date: '2023/11/10', status: 'Active' },
        { title: 'Glare Test', date: '2023/11/10', status: 'Active' },

      ],

       
    },
    {
      id: 4,
      icon: "assets/icons/procedures.svg",
      header: 'Procedures',
      iconOtr: [{ icon: "assets/icons/plusIcon.svg" }, { icon: "assets/icons/expandIcon.svg" }],
      details: [
        {
          title: 'No procedures',
        }
      ]
    },
    {
      id: 5,
      icon: "assets/icons/labIcon.svg",
      header: 'Lab',
      iconOtr: [{ icon: "assets/icons/plusIcon.svg" }, { icon: "assets/icons/expandIcon.svg" }],
      details: [{
      title: 'No lab orders'}
          ]
        
    },
    {
      id: 6,
      icon: "assets/icons/vitalIcon.svg",
      header: 'Vitals',
      iconOtr: [{ icon: "assets/icons/plusIcon.svg" }, { icon: "assets/icons/expandIcon.svg" }, { icon: "assets/icons/vitalIcn.svg" }],
      user: [
            { name: 'Hashim', date: '2023/07/03', time: '13:00:00' }
          ],
      details: [{ title: "" }],
      icons: [
            { icon: "assets/icons/temp.svg", rate: 36 },
            { icon: "assets/icons/heart.svg", rate: 70 },
            { icon: "assets/icons/glucose.svg", rate: 120 },
            { icon: "assets/icons/blood.svg", rate: 100 },
            { icon: "assets/icons/height.svg", rate: 168 },
            { icon: "assets/icons/weight.svg", rate: 52 },
            { icon: "assets/icons/bmi.svg", rate: 18.4 },
            { icon: "assets/icons/temperature.svg" }
          ]
        }
      
  ]
  
  medicalForm:any[]=[
    {formName:'Dermatology General From',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'DGF'},
    {formName:'Soap Note 2',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'SN2'},
    {formName:'Medlite Laser',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'ML'},
    {formName:'Scarlet RF',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'SRF'},
    {formName:'Multiple Laser Treatment Form',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'MLTF'},
    {formName:'Fractional CO2',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'FCO2'},
    {formName:'Microdermabrasion',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'MM'},
    {formName:'General Laser Form',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'GLF'},
    {formName:'Facial',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'FAC'},
    {formName:'Tattoo Removal Rejuvi',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'TRR'},
    {formName:'Trivantage',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'TRIV'},
    {formName:'Picoway Laser',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'PLR'},
    {formName:'Cutera Excel V',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'CEV'},
    {formName:'Electric Epilation',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'EE'},
    {formName:'KTP Ideas Laser',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'KTP'},
    {formName:'Puva Hand and Foot',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'PHF'},
    {formName:'Excimer',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'EXC'},
    {formName:'Hydrafacial',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'HYF'},
    {formName:'Ultherapy',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'ULT'},
    {formName:'Erbium Laser',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'ELR'},
    {formName:'Cool Sculpting',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'CSC'},
    {formName:'Narrow Band',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'NRB'},
    {formName:'VBeam Laser',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'VBL'},
    {formName:'Accolade',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'ACC'},
    {formName:'Cyosure Apogee',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'CYA'},
    {formName:'GentleLase Pro',status:'Not filled',user:'Chief surgeon',document:[{name:'Document Wizard',icon:'assets/icons/documentWizard.svg'}],fName:'GLP'}
  ]
  heading: any;


  // Navigations for plusIcon and expand Icon

  handlePlusIconClick(icon: any, details: any) {
    if (icon.icon === 'assets/icons/plusIcon.svg') {
      switch (details.header) {
        case 'Problems':
          this.router.navigate(['/add-problems']);
          break;
        case 'Episodes':
          this.router.navigate(['/add-episodes']);
          break;
        case 'Vitals':
          this.router.navigate(['/add-vitals']);
          break;
          case 'Medications':
          this.router.navigate(['/lab']);
          break;
          case 'Lab':
          this.router.navigate(['/medications']);
          break;
          case 'Procedures':
          this.router.navigate(['/procedures']);
          break;
        default:
          break;
      }
    } else if (icon.icon === 'assets/icons/expandIcon.svg') {
      
      switch (details.header) {
        case 'Problems':
          this.router.navigate(['/problems']);
          break;
        case 'Vitals':
          this.router.navigate(['/vitals']);
          break;
          case 'Episodes':
          this.router.navigate(['/episodes']);
          break;
          case 'Lab':
          this.router.navigate(['/lab']);
          break;
          case 'Procedures':
          this.router.navigate(['/procedures']);
          break;
          case 'Medications':
          this.router.navigate(['/medications']);
          break;
        default:
          break;
      }
    }
  }
 

}
