import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { VitalsComponent } from '../form-wizard/vitals/vitals.component'
import { ProfileHeaderComponent } from 'src/app/shared/components/profile-header/profile-header.component';
import { ProblemsComponent } from './problems/problems.component';
import { ActivatedRoute } from '@angular/router';
import { EpisodesComponent } from'./episodes/episodes.component';
import {DermatologyComponent} from './dermatology/dermatology.component';
import { OrdersComponent } from "./orders/orders.component";
import { FractionalComponent } from './fractional/fractional.component';
import { MicrodermabrasionComponent } from './microdermabrasion/microdermabrasion.component';

@Component({
    selector: 'app-form-wizard',
    standalone: true,
    templateUrl: './form-wizard.component.html',
    styleUrls: ['./form-wizard.component.scss'],
    imports: [CommonModule, ProfileHeaderComponent, DermatologyComponent,TabViewModule,VitalsComponent, ProblemsComponent, EpisodesComponent, OrdersComponent,FractionalComponent ,MicrodermabrasionComponent]
})
export class FormWizardComponent {
  selectedForm: any = {};
  routeData = history.state;

  constructor(private route: ActivatedRoute) {
    console.log(this.routeData.data,'routeData')
  }


}
