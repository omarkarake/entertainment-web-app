// media.reducer.ts

import { MediaItem } from './../../models/mediaItem.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as MediaActions from '../actions/media.actions';
import { v4 as uuidv4 } from 'uuid';

// Extend EntityState to manage media items
export interface MediaState extends EntityState<MediaItem> {
  loaded: boolean;
  error: string | null;
  searchResults: MediaItem[];
  searchInput: string; // Add searchInput property
}

// Create an entity adapter for media items
export const adapter = createEntityAdapter<MediaItem>({
  selectId: (mediaItem: MediaItem) => mediaItem.id || uuidv4(), // Use existing id or generate UUID for each media item
});

export const initialState: MediaState = adapter.getInitialState({
  loaded: false,
  error: null,
  searchResults: [],
  searchInput: '', // Initialize searchInput
});

export const mediaReducer = createReducer(
  initialState,
  on(MediaActions.loadMediaItemsSuccess, (state, { mediaItems }) =>
    adapter.setAll(
      mediaItems.map((item) => ({ ...item, id: item.id || uuidv4() })),
      { ...state, loaded: true }
    )
  ),
  on(MediaActions.loadMediaItemsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  // do all the rest search using this method
  on(MediaActions.searchAllItems, (state, { searchTerm }) => ({
    ...state,
    searchResults: state.entities
      ? Object.values(state.entities).filter((item): item is MediaItem =>
          item !== undefined && item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [],
  })),
  on(MediaActions.searchMovies, (state, { searchTerm }) => ({
    ...state,
    searchResults: state.entities
      ? Object.values(state.entities).filter(
          (item): item is MediaItem =>
            item !== undefined &&
            item.category === 'Movie' &&
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [],
  })),
  on(MediaActions.searchTVSeries, (state, { searchTerm }) => ({
    ...state,
    searchResults: state.entities
      ? Object.values(state.entities).filter(
          (item): item is MediaItem =>
            item !== undefined &&
            item.category === 'TV Series' &&
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [],
  })),
  on(MediaActions.searchBookmarkedItems, (state, { searchTerm }) => ({
    ...state,
    searchResults: state.entities
      ? Object.values(state.entities).filter(
          (item): item is MediaItem =>
            item !== undefined &&
            item.isBookmarked &&
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [],
  })),
  on(MediaActions.updateSearchInput, (state, { searchInput }) => ({
    ...state,
    searchInput,
  }))
);

// Create selectors
export const { selectAll } = adapter.getSelectors();