import { Component, OnInit } from '@angular/core';
import { MediaState } from '../../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import { selectTrendingMoviesAndTVShows } from '../../../store/selectors/media.selectors';
import { MediaItem } from '../../../models/mediaItem.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  constructor(private store: Store<MediaState>) {}

  ngOnInit(): void {
    // For movies and TV shows that are trending
    this.store.select(selectTrendingMoviesAndTVShows).subscribe({
      next: (trendingItems: MediaItem[]) => {
        console.log('Trending items:', trendingItems);
      },
      error: (err) => {
        console.error('Error fetching trending items:', err);
      },
    });
  }
}
