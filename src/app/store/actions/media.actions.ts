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
