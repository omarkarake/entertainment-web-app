import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaItem } from '../../../../models/mediaItem.model';
import {
  selectBookmarkedMovies,
  selectBookmarkedTVShows,
  selectSearchInput,
  selectSearchResults,
} from '../../../../store/selectors/media.selectors';
import { MediaState } from '../../../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.css',
})
export class BookmarkedComponent {
  selectBookmarkedMovies$!: Observable<MediaItem[]>;
  selectBookmarkedTVShows$!: Observable<MediaItem[]>;
  searchResults$!: Observable<MediaItem[]>;
  searchResults: MediaItem[] = [];
  selectSearchInput$!: Observable<string>;
  searchText: string = '';

  constructor(private store: Store<MediaState>) {}

  ngOnInit(): void {
    // Select bookmarked trending movies and TV shows
    this.selectBookmarkedMovies$ = this.store.select(
      selectBookmarkedMovies
    );

    // Select bookmarked non-trending movies and TV shows
    this.selectBookmarkedTVShows$ = this.store.select(
      selectBookmarkedTVShows
    );

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
