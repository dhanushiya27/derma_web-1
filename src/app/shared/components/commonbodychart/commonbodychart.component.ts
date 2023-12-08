import { Component, Input,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-commonbodychart',
  standalone: true,
  imports: [CommonModule,CardModule],
  templateUrl: './commonbodychart.component.html',
  styleUrls: ['./commonbodychart.component.scss']
})
export class CommonbodychartComponent {
  @Input() bodyChartData: any[] = [];
  @Input() chartName : any;
  @Input() chartImage : any;
}
