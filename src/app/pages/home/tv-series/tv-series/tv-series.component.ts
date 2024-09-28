import { Component } from '@angular/core';
import { MediaItem } from '../../../../models/mediaItem.model';
import { Observable } from 'rxjs';
import {
  selectSearchInput,
  selectSearchResults,
  selectTVShows,
} from '../../../../store/selectors/media.selectors';
import { MediaState } from '../../../../store/reducers/media.reducer';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css',
})
export class TvSeriesComponent {
  tvShow$!: Observable<MediaItem[]>;
  searchResults$!: Observable<MediaItem[]>;
  searchResults: MediaItem[] = [];
  selectSearchInput$!: Observable<string>;
  searchText: string = '';

  constructor(private store: Store<MediaState>) {}

  ngOnInit(): void {
    // select the movies
    this.tvShow$ = this.store.select(selectTVShows);

    // Select search results
    this.searchResults$ = this.store.select(selectSearchResults);
    this.searchResults$.subscribe((searchResults) => {
      this.searchResults = searchResults;
    });

    // Select search input
    this.selectSearchInput$ = this.store.select(selectSearchInput);
    this.selectSearchInput$.subscribe((searchInput) => {
      this.searchText = searchInput;
    });
  }
}
