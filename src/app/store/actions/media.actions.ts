// media.actions.ts

import { createAction, props } from '@ngrx/store';
import { MediaItem } from '../../models/mediaItem.model';

export const loadMediaItems = createAction('[Media] Load Media Items');

export const loadMediaItemsSuccess = createAction(
  '[Media] Load Media Items Success',
  props<{ mediaItems: MediaItem[] }>()
);

export const loadMediaItemsFailure = createAction(
  '[Media] Load Media Items Failure',
  props<{ error: any }>()
);

export const searchAllItems = createAction(
  '[Media] Search All Items',
  props<{ searchTerm: string }>()
);

export const searchMovies = createAction(
  '[Media] Search Movies',
  props<{ searchTerm: string }>()
);

export const searchTVSeries = createAction(
  '[Media] Search TV Series',
  props<{ searchTerm: string }>()
);

export const searchBookmarkedItems = createAction(
  '[Media] Search Bookmarked Items',
  props<{ searchTerm: string }>()
);

export const updateSearchInput = createAction(
  '[Media] Update Search Input',
  props<{ searchInput: string }>()
);

export const toggleBookmark = createAction(
  '[Media] Toggle Bookmark',
  props<{ id: string }>()
);