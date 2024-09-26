import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MediaItem } from '../../models/mediaItem.model';
import * as MediaActions from '../actions/media.actions';
import { v4 as uuidv4 } from 'uuid';

// Extend EntityState to manage media items
export interface MediaState extends EntityState<MediaItem> {
  loaded: boolean;
  error: string | null;
}

// Create an entity adapter for media items
export const adapter = createEntityAdapter<MediaItem>({
  selectId: (mediaItem) => uuidv4(), // Generate UUID for each media item
});

export const initialState: MediaState = adapter.getInitialState({
  loaded: false,
  error: null,
});

export const mediaReducer = createReducer(
  initialState,
  on(MediaActions.loadMediaItemsSuccess, (state, { mediaItems }) =>
    adapter.setAll(mediaItems, { ...state, loaded: true })
  ),
  on(MediaActions.loadMediaItemsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const { selectAll } = adapter.getSelectors();
