// home.component.ts
import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/mediaItem.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { filter, first, Observable } from 'rxjs';
import { MediaState, selectAll } from '../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import { selectAllMediaItems } from '../../store/selectors/media.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  activeFeature: string = 'main';
  mediaItems$!: Observable<MediaItem[]>;

  constructor(
    private navigationService: NavigationService,
    private mediaService: MediaService,
    private store: Store<MediaState>
  ) {}

  ngOnInit(): void {
    // Subscribe to the active feature
    this.navigationService.activeFeature$.subscribe((feature) => {
      this.activeFeature = feature;
    });

    // Ensure the mediaItems are available before logging
    this.mediaItems$ = this.store.select(selectAllMediaItems).pipe(
      filter((mediaItems) => mediaItems && mediaItems.length > 0), // Ensure items exist
      first() // Complete after the first emission
    );

    this.mediaItems$.subscribe({
      next: (mediaItems: MediaItem[]) => {
        console.log('Media items:', mediaItems);
      },
      error: (err) => {
        console.error('Error fetching media items:', err);
      },
    });
  }

  // Update the active feature on icon click
  setActiveFeature(feature: string) {
    this.navigationService.setActiveFeature(feature);
  }
}
