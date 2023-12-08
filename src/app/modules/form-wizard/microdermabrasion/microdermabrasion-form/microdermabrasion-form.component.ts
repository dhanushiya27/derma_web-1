import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesornoradiobuttonComponent } from 'src/app/shared/components/commonformfields/yesornoradiobutton/yesornoradiobutton.component';
import { MultiCheckboxComponent } from 'src/app/shared/components/commonformfields/multi-checkbox/multi-checkbox.component';

@Component({
  selector: 'app-microdermabrasion-form',
  standalone: true,
  imports: [CommonModule,YesornoradiobuttonComponent ,MultiCheckboxComponent],
  templateUrl: './microdermabrasion-form.component.html',
  styleUrls: ['./microdermabrasion-form.component.scss']
})
export class MicrodermabrasionFormComponent {
  Facialcleansing: string ='Facial cleansing';
  Microdermabrasion:string ='Microdermabrasion';
  Milkcleanse :string ='Milk cleanse';
  Gentlescrub:string = 'Gentle scrub';
  Comedoneextraction:string='Comedone extraction';
  Toolused:string='Tool used';

  radioBtnEvent(event:any , type:any){
    console.log(event,'logggggggggggggggggg+++');
    console.log(type, "typeeeee++++++++");
    
    
  }
}
