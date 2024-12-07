import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive, Router, NavigationEnd} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit {
  isHomeRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check the current route whenever it changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeRoute = this.router.url === '/';
      }
    });
  }
}
