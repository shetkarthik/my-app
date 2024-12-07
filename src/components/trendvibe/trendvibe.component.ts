import { Component } from '@angular/core';
import * as trendvibe from "../../assets/json/trendvibe.json";

@Component({
  selector: 'app-trendvibe',
  standalone: true,
  imports: [],
  templateUrl: './trendvibe.component.html',
  styleUrl: './trendvibe.component.css'
})
export class TrendvibeComponent 
{
 trendvibed: any =(trendvibe as any).default;
  
 constructor() {
  // Log the loaded JSON to the console
  console.log('Trendvibe Data:', this.trendvibed);
}

}
