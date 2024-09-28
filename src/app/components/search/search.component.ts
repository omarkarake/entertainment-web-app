// search.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as MediaActions from '../../store/actions/media.actions';
import { Router } from '@angular/router';
import { MediaState } from '../../store/reducers/media.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  isTyping: boolean = false;

  constructor(private fb: FormBuilder, private store: Store<MediaState>, private router: Router) {}

  ngOnInit(): void {
    // Initialize the search form with form control and validation
    this.searchForm = this.fb.group({
      search: ['', [Validators.minLength(3)]], // Min length of 3 characters
    });

    // Subscribe to the search control value changes with debounce and distinctUntilChanged
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // 300ms debounce time
        distinctUntilChanged() // Only emit when the value changes
      )
      .subscribe((searchValue: string) => {
        console.log('Search Value:', searchValue); // Log the search value
        this.dispatchSearchAction(searchValue);
      });
  }

  get searchControl(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  // Detect when typing starts
  isTypingInput() {
    this.isTyping = true;
  }

  // Detect when typing ends
  isTypingOutput() {
    this.isTyping = false;
  }

  private dispatchSearchAction(searchValue: string) {
    const url = this.router.url;
    if (url.endsWith('/main')) {
      this.store.dispatch(MediaActions.searchAllItems({ searchTerm: searchValue }));
    } else if (url.endsWith('/movies')) {
      this.store.dispatch(MediaActions.searchMovies({ searchTerm: searchValue }));
    } else if (url.endsWith('/tv-series')) {
      this.store.dispatch(MediaActions.searchTVSeries({ searchTerm: searchValue }));
    } else if (url.endsWith('/bookmarked')) {
      this.store.dispatch(MediaActions.searchBookmarkedItems({ searchTerm: searchValue }));
    }
  }
}