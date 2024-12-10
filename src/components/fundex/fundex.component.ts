import { Component } from '@angular/core';
import * as fundex from "../../assets/json/fundex.json";
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-fundex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fundex.component.html',
  styleUrl: './fundex.component.css'
})
export class FundexComponent {

  fundexed : any = (fundex as any).default;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  imageUrls: string[] = [
    '../../assets/data/fundex/image1.png',
    '../../assets/data/fundex/image2.png',
    '../../assets/data/fundex/image3.png',
    '../../assets/data/fundex/image4.png',
    '../../assets/data/fundex/image5.png',
    '../../assets/data/fundex/image6.png',
  
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
