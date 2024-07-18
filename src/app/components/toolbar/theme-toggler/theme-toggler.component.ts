import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent {
constructor(public dataService : DataService){}
}
