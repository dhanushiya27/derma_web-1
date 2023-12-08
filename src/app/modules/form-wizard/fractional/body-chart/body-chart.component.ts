import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CommonbodychartComponent } from 'src/app/shared/components/commonbodychart/commonbodychart.component';

@Component({
  selector: 'app-body-chart',
  standalone: true,
  imports: [CommonModule,CardModule,CommonbodychartComponent],
  templateUrl: './body-chart.component.html',
  styleUrls: ['./body-chart.component.scss']
})
export class BodyChartComponent {
  fractionalBodyChart = [
    { chartName: 'Body Chart', chartImage: 'assets/icons/bodyChart.svg' },
    { chartName: 'Face Chart', chartImage: 'assets/icons/faceChart.svg' },
    { chartName: 'Leg Chart', chartImage: 'assets/icons/legChart.svg' },
    { chartName: 'Hand Chart', chartImage: 'assets/icons/handChart.svg' },
  ];
}
