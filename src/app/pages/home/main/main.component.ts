import { Component, OnInit } from '@angular/core';
import { MediaState } from '../../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import { selectNonTrendingMoviesAndTVShows, selectTrendingMoviesAndTVShows } from '../../../store/selectors/media.selectors';
import { MediaItem } from '../../../models/mediaItem.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  trendingMediaItems$!: Observable<MediaItem[]>;
  nonTrendingMediaItems$!: Observable<MediaItem[]>;

  constructor(private store: Store<MediaState>) {}

  ngOnInit(): void {
    // Select trending movies and TV shows
    this.trendingMediaItems$ = this.store.select(
      selectTrendingMoviesAndTVShows
    );

    // For movies and TV shows that are trending
    this.nonTrendingMediaItems$ = this.store.select(
      selectNonTrendingMoviesAndTVShows
    );
  }
}
