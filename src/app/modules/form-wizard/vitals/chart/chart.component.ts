import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//Primeng
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, ChartModule,ButtonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  tempData: any;
  heartData: any;
  pressureData: any;
  glucoseData: any;
  heightData: any;
  weightData: any; 
  bmiData: any; 
  bosData: any;

  tempOptions:any;
  heartOptions:any;
  pressureOptions:any;
  glucoseOptions:any;
  heightOptions:any;
  weightOptions:any;
  bmiOptions:any;
  bosOptions:any;

  ngOnInit() {
      const textColor = '#848484';
      const textColorSecondary = '#848484'
      const documentStyle = getComputedStyle(document.documentElement);
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
    //Data
      this.tempData = {
          labels: ['2023-06-08','2023-07-03','2023-08-10'],
          datasets: [    
              {
                  label: 'Temperature',
                  data: [0,5,10,15,20,25,30],
                  fill: false,
                  borderColor:'#379E1E',
                  backgroundColor:'#379E1E',
                  tension: 0
              },
          ],
      };

      this.heartData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'Heart Rate',
                data: [70,80,100],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            }
        ],
      };
      this.pressureData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'Systolic',
                data: [120,100,120],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            },
            {
                label: 'Diastolic',
                data: [0,80,60],
                fill: false,
                borderColor: '#C5B630',
                backgroundColor: '#C5B630',
                tension: 0
            }
        ],
      };
      this.glucoseData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'Blood Glucose',
                data: [0,3,5],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            }
        ],
      };
      this.heightData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'Height',
                data: [170,170,170],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            }
        ],
      };
      this.weightData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'Weight',
                data: [55,55,55],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            }
        ],
      };
      this.bmiData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'BMI',
                data: [19,19,19],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            }
        ],
      };
      this.bosData = {
        labels: ['2023-06-08','2023-07-03','2023-08-10'],
        datasets: [    
            {
                label: 'Blood Oxygen Saturation Level (Spo2)',
                data: [90,95,100],
                fill: false,
                borderColor:'#379E1E',
                backgroundColor:'#379E1E',
                tension: 0
            }
        ],
      };



    //   Options
      this.tempOptions = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          responsive: true,                        
          plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      drawBorder: false
                  }
              },
              y: {
                ticks: {
                  color: textColorSecondary,
                  stepSize:5,
                },
                grid: {
                    drawBorder: false
                }
            }
          }
      };
      this.heartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:20,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
      this.pressureOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:20,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
      this.glucoseOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:1,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
      this.heightOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:30,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
      this.weightOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:10,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
      this.bmiOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:2,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
      this.bosOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,                        
        plugins: {
            legend: {
              display: false,
              labels: {
                color: textColor,
                font: {
                  size: 16, 
                  family:'Poppins-Regular'
                },
              },
            },
         },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
              ticks: {
                color: textColorSecondary,
                stepSize:20,
              },
              grid: {
                  drawBorder: false
              }
          }
        }
      };
  }
}
