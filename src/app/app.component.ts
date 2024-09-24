import { Component } from '@angular/core';
import { MediaService } from './services/media/media.service';
import { MediaItem } from './models/model.mediaItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'entertainment-web-app';
  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.getMediaItems().subscribe(
      (data: MediaItem[]) => {
        console.log('Media items:', data);
      },
      (error) => {
        console.error('Error fetching media items:', error);
      }
    );
  }
}
