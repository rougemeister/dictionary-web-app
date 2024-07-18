import { Component } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
constructor(public dataService: DataService){}
}
