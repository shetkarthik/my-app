import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
})
export class HomeComponent implements OnInit {
  isSmallScreen: boolean = false;
  data: { quote: string; author: string } | null = null;
  private apiService = inject(ApiService); 

  ngOnInit() {
    this.checkScreenSize();
    this.fetchData(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 1024;
  }

  fetchData() {
    this.apiService.getData().subscribe(
      (response:  { quote: string; author: string }) => {
        this.data = response; 
        console.log(response);
      },
      (error) => {
        console.error('Error fetching data:', error); 
      }
    );
  }
}
