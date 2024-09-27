// home.component.ts
import { Component } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/mediaItem.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { Observable } from 'rxjs';
import { MediaState, selectAll } from '../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
    this.mediaItems$ = this.store.select(selectAll);
  }

  // Update the active feature on icon click
  setActiveFeature(feature: string) {
    this.navigationService.setActiveFeature(feature);
  }
}
