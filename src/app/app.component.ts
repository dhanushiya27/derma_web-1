import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,Router} from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

// custom imports
import { HeaderComponent } from './core/components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'derma_web';
  ngOnInit() {

  }
  
 
}


