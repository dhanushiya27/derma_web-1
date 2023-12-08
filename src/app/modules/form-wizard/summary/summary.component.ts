import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  summaryData: any = {
    "summary": {
      "header": "Summary",
      "comments": [
        {
          "author": "Hashim",
          "timestamp": "08/02/2023 11:15:00 AM",
          "text": "Next appointment after two weeks"
        }
      ],
      "summaryContent": {
        "formTitle": "Dermatology General Form",
        "history": {
          "medicalHistory": [
            { "condition": "Hypertension", "duration": "For past 3 years" },
            { "condition": "Diabetes", "duration": "For past 6 months" }
          ],
          "medicationHistory": [
            { "medication": "Asthma", "duration": "Omalizumab 2 months" }
          ],
          "allergy": "No",
          "smokingDrinkingHistory": "No"
        }
      }
    }
  };
}
