import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive, Router, NavigationEnd} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
