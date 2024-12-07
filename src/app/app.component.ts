import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../components/logo/logo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
