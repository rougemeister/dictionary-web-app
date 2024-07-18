import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DictionaryComponent } from './components/dictionary/dictionary/dictionary.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-rooted',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, DictionaryComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public dataService:DataService){}
}
