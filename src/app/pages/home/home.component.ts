// home.component.ts
import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/mediaItem.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { filter, first, Observable } from 'rxjs';
import { MediaState, selectAll } from '../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import {
  selectAllMediaItems,
  selectNonTrendingBookmarkedMoviesAndTVShows,
  selectNonTrendingMovies,
  selectNonTrendingMoviesAndTVShows,
  selectNonTrendingTVShows,
  selectTrendingBookmarkedMoviesAndTVShows,
  selectTrendingMovies,
  selectTrendingMoviesAndTVShows,
  selectTrendingTVShows,
} from '../../store/selectors/media.selectors';

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
        // console.log('Media items:', mediaItems);
      },
      error: (err) => {
        console.error('Error fetching media items:', err);
      },
    });

    // For movies and TV shows that are trending
    this.store.select(selectTrendingMoviesAndTVShows).subscribe({
      next: (trendingItems: MediaItem[]) => {
        console.log('Trending items:', trendingItems);
      },
      error: (err) => {
        console.error('Error fetching trending items:', err);
      },
    });

    // For movies and TV shows that are not trending
    this.store.select(selectNonTrendingMoviesAndTVShows).subscribe({
      next: (nonTrendingItems: MediaItem[]) => {
        console.log('Non-trending items:', nonTrendingItems);
      },
      error: (err) => {
        console.error('Error fetching non-trending items:', err);
      },
    });

    // For trending movies
    this.store.select(selectTrendingMovies).subscribe({
      next: (trendingMovies: MediaItem[]) => {
        console.log('Trending movies:', trendingMovies);
      },
      error: (err) => {
        console.error('Error fetching trending movies:', err);
      },
    });

    // For non-trending movies
    this.store.select(selectNonTrendingMovies).subscribe({
      next: (nonTrendingMovies: MediaItem[]) => {
        console.log('Non-trending movies:', nonTrendingMovies);
      },
      error: (err) => {
        console.error('Error fetching non-trending movies:', err);
      },
    });

    // For trending TV shows
    this.store.select(selectTrendingTVShows).subscribe({
      next: (trendingTVShows: MediaItem[]) => {
        console.log('Trending TV shows:', trendingTVShows);
      },
      error: (err) => {
        console.error('Error fetching trending TV shows:', err);
      },
    });

    // For non-trending TV shows
    this.store.select(selectNonTrendingTVShows).subscribe({
      next: (nonTrendingTVShows: MediaItem[]) => {
        console.log('Non-trending TV shows:', nonTrendingTVShows);
      },
      error: (err) => {
        console.error('Error fetching non-trending TV shows:', err);
      },
    });

    // For bookmarked trending movies and TV shows
    this.store.select(selectTrendingBookmarkedMoviesAndTVShows).subscribe({
      next: (trendingBookmarkedItems: MediaItem[]) => {
        console.log('Trending bookmarked items:', trendingBookmarkedItems);
      },
      error: (err) => {
        console.error('Error fetching trending bookmarked items:', err);
      },
    });

    // For bookmarked non-trending movies and TV shows
    this.store.select(selectNonTrendingBookmarkedMoviesAndTVShows).subscribe({
      next: (nonTrendingBookmarkedItems: MediaItem[]) => {
        console.log('Non-trending bookmarked items:', nonTrendingBookmarkedItems);
      },
      error: (err) => {
        console.error('Error fetching non-trending bookmarked items:', err);
      },
    });
  }

  // Update the active feature on icon click
  setActiveFeature(feature: string) {
    this.navigationService.setActiveFeature(feature);
  }
}
