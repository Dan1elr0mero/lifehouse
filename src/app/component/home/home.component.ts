import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingtestimonialComponent } from '../landingtestimonial/landingtestimonial.component';
import { LandingInstalationsComponent } from '../landing-instalations/landing-instalations.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LandingtestimonialComponent, LandingInstalationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Life - Heriatric Home';
  const = 'Welcome to Heriatric Home';
  
}
