import { Component } from '@angular/core';
import * as curehub from "../../assets/json/curehub.json";
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-curehub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curehub.component.html',
  styleUrl: './curehub.component.css'
})
export class CurehubComponent {
  curehubdata : any = (curehub as any).default;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  imageUrls: string[] = [
    '../../assets/data/curehub/image1.png',
    '../../assets/data/curehub/image2.png',
    '../../assets/data/curehub/image3.png',
    '../../assets/data/curehub/image4.png',
    '../../assets/data/curehub/image5.png',
    '../../assets/data/curehub/image6.png',
  
  ];

  selectedImageSrc: string | null = null; // Holds the clicked image source

// Function to expand the clicked image
expandImage(imageSrc: string): void {
  this.selectedImageSrc = imageSrc;
}

// Function to close the modal
closeImage(): void {
  this.selectedImageSrc = null;
}

}
