import { Component } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/model.mediaItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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


