import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';


@Component({
  selector: 'app-landing-instalations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-instalations.component.html',
  styleUrl: './landing-instalations.component.css'
})
export class LandingInstalationsComponent {

  images: string[] = [
    '../../../assets/imagen1.jpeg',
   '../../../assets/imagen2.jpeg',
   '../../../assets/imagen3.jpeg',
   '../../../assets/imagen4.jpeg'
  ];
  selectedImage: string = this.images[0];

  selectImage(image: string): void {
    this.selectedImage = image;
  }

}
