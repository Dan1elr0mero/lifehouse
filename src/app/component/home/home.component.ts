import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingtestimonialComponent } from '../landingtestimonial/landingtestimonial.component';
import { LandingInstalationsComponent } from '../landing-instalations/landing-instalations.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ResidentLifeComponent } from '../resident-life/resident-life.component';
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from '../../footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LandingtestimonialComponent, LandingInstalationsComponent, HeroComponent, AboutComponent, ServicesComponent,
    ResidentLifeComponent, ContactComponent , FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Life - Heriatric Home';
  const = 'Welcome to Heriatric Home';
  
}
