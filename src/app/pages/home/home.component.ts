import { Component } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/mediaItem.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  activeFeature: string = 'main';

  constructor(
    private navigationService: NavigationService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    // Subscribe to the active feature
    this.navigationService.activeFeature$.subscribe((feature) => {
      this.activeFeature = feature;
    });
    this.mediaService.getMediaItems().subscribe(
      (data: MediaItem[]) => {
        console.log('Media items:', data);
      },
      (error) => {
        console.error('Error fetching media items:', error);
      }
    );
  }

  // Update the active feature on icon click
  setActiveFeature(feature: string) {
    this.navigationService.setActiveFeature(feature);
  }
}
