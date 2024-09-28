import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaItem } from '../../../models/mediaItem.model';
import { MediaState } from '../../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import {
  selectMovies,
  selectSearchInput,
  selectSearchResults,
} from '../../../store/selectors/media.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movies$!: Observable<MediaItem[]>;
  searchResults$!: Observable<MediaItem[]>;
  searchResults: MediaItem[] = [];
  selectSearchInput$!: Observable<string>;
  searchText: string = '';

  constructor(private store: Store<MediaState>) {}

  ngOnInit(): void {
    // select the movies
    this.movies$ = this.store.select(selectMovies);

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
