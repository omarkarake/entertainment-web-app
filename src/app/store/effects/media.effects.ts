import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MediaService } from '../../services/media/media.service';
import * as MediaActions from '../actions/media.actions';

@Injectable()
export class MediaEffects {
  constructor(
    private actions$: Actions,
    private mediaService: MediaService
  ) {}

  loadMediaItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.loadMediaItems),
      mergeMap(() =>
        this.mediaService.getMediaItems().pipe(
          map((mediaItems) =>
            MediaActions.loadMediaItemsSuccess({ mediaItems })
          ),
          catchError((error) => of(MediaActions.loadMediaItemsFailure({ error })))
        )
      )
    )
  );
}
