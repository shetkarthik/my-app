import { Component } from '@angular/core';
import * as trendvibe from "../../assets/json/trendvibe.json";
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-trendvibe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trendvibe.component.html',
  styleUrl: './trendvibe.component.css'
})
export class TrendvibeComponent 
{
 trendvibed: any =(trendvibe as any).default;

 constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

 imageUrls: string[] = [
  '../../assets/data/trendvibe/image1.png',
  '../../assets/data/trendvibe/image2.png',
  '../../assets/data/trendvibe/image3.png',
  '../../assets/data/trendvibe/image4.png',
  '../../assets/data/trendvibe/image5.png',
  '../../assets/data/trendvibe/image6.png',
  '../../assets/data/trendvibe/image7.png',
  '../../assets/data/trendvibe/image8.png',
  '../../assets/data/trendvibe/image9.png',
  '../../assets/data/trendvibe/image10.png',
  '../../assets/data/trendvibe/image11.png',
  '../../assets/data/trendvibe/image12.png',
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
