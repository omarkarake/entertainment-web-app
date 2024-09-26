import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, first, mapTo } from 'rxjs/operators';
import * as MediaActions from '../../store/actions/media.actions';
import { MediaState } from '../../store/reducers/media.reducer';
import { selectMediaLoaded } from '../../store/selectors/media.selectors';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<void> {
  constructor(private store: Store<MediaState>) {}

  resolve(): Observable<void> {
    return this.store.select(selectMediaLoaded).pipe(
      first(),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(MediaActions.loadMediaItems());
        }
      }),
      mapTo(void 0) // Transforms the boolean to void
    );
  }
}
