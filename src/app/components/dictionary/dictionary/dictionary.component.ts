import { Component } from '@angular/core';
import { AudioComponent } from './audio/audio.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-dictionary-main',
  standalone: true,
  imports: [AudioComponent],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {
constructor(public dataService:DataService){}
}
