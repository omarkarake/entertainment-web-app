// media.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { ErrorHandlingService } from '../error/error-handling.service';
import { MediaItem } from '../../models/mediaItem.model';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private readonly dataUrl = 'assets/data.json'; // URL to JSON file
  private mediaData: BehaviorSubject<MediaItem[]> = new BehaviorSubject<
    MediaItem[]
  >([]);
  public firstMediaItem$: Observable<MediaItem[]> =
    this.mediaData.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandling: ErrorHandlingService
  ) {}

  getMediaItems(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(this.dataUrl).pipe(
      retry(3), // Retry up to 3 times in case of errors
      catchError((error) => this.errorHandling.handleError(error)), // Error handling
      tap((data: MediaItem[]) => this.mediaData.next(data)) // Update the mediaData subject with the fetched data
    );
  }
}
