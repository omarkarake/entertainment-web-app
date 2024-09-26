import { Component } from '@angular/core';
import { MediaItem } from './models/mediaItem.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MediaState, selectAll } from './store/reducers/media.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'entertainment-web-app';
}
