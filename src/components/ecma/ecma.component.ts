import { Component } from '@angular/core';
import * as ecma from "../../assets/json/ecma.json";
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ecma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecma.component.html',
  styleUrl: './ecma.component.css'
})
export class EcmaComponent {
  ecmadata : any = (ecma as any).default;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  imageUrls: string[] = [
    '../../assets/data/ecma/image1.jpg',
    '../../assets/data/ecma/image2.jpg',
    '../../assets/data/ecma/image3.jpg',
    '../../assets/data/ecma/image4.jpg',
    '../../assets/data/ecma/image5.jpg',
    '../../assets/data/ecma/image6.jpg',
  
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
