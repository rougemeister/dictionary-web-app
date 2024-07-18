import { Component } from '@angular/core';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toolbar1',
  standalone: true,
  imports: [ThemeTogglerComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  showDropDown:boolean = false
constructor(public dataService: DataService){}

toggleDropdown(){
  this.showDropDown = !this.showDropDown;
}
}
