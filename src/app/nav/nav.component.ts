import { Component } from '@angular/core';
import { TogglerComponent } from '../toggler/toggler.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TogglerComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
