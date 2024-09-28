import { Component, HostListener, OnInit } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/mediaItem.model';
import { NavigationService } from '../../services/navigation/navigation.service';
import { filter, first, Observable } from 'rxjs';
import { MediaState } from '../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import { selectAllMediaItems } from '../../store/selectors/media.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  activeFeature: string = 'main';
  mediaItems$!: Observable<MediaItem[]>;
  screenWidth: number = window.innerWidth;
  dropLogout: boolean = false;

  // Hover states
  mainHovered: boolean = false;
  moviesHovered: boolean = false;
  tvSeriesHovered: boolean = false;
  bookmarkedHovered: boolean = false;

  constructor(
    private navigationService: NavigationService,
    private mediaService: MediaService,
    private store: Store<MediaState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to the active feature
    this.navigationService.activeFeature$.subscribe((feature) => {
      this.activeFeature = feature;
    });

    // Ensure the mediaItems are available before logging
    this.mediaItems$ = this.store.select(selectAllMediaItems).pipe(
      filter((mediaItems) => mediaItems && mediaItems.length > 0),
      first()
    );

    this.mediaItems$.subscribe({
      next: (mediaItems: MediaItem[]) => {
        // Handle media items
      },
      error: (err) => {
        console.error('Error fetching media items:', err);
      },
    });

    this.onResize(); // Initialize the screen size check
  }

  // Update screenWidth on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.screenWidth = window.innerWidth;
  }

  // Check if the screen is large enough (greater than 1024px)
  isLargeScreen(): boolean {
    return this.screenWidth >= 1024;
  }

  // Hover methods for main icon
  setMainHover() {
    if (this.isLargeScreen()) {
      this.mainHovered = true;
    }
  }
  setMainHoverFalse() {
    if (this.isLargeScreen()) {
      this.mainHovered = false;
    }
  }

  // Hover methods for movies icon
  setMoviesHover() {
    if (this.isLargeScreen()) {
      this.moviesHovered = true;
    }
  }
  setMoviesHoverFalse() {
    if (this.isLargeScreen()) {
      this.moviesHovered = false;
    }
  }

  // Hover methods for TV series icon
  setTvSeriesHover() {
    if (this.isLargeScreen()) {
      this.tvSeriesHovered = true;
    }
  }
  setTvSeriesHoverFalse() {
    if (this.isLargeScreen()) {
      this.tvSeriesHovered = false;
    }
  }

  // Hover methods for bookmarked icon
  setBookmarkedHover() {
    if (this.isLargeScreen()) {
      this.bookmarkedHovered = true;
    }
  }
  setBookmarkedHoverFalse() {
    if (this.isLargeScreen()) {
      this.bookmarkedHovered = false;
    }
  }

  // Update the active feature on icon click
  setActiveFeature(feature: string) {
    this.navigationService.setActiveFeature(feature);
  }

  toggleLogout(){
    this.dropLogout = !this.dropLogout;
  }

  Logout(){
    this.router.navigate(['auth/login']);
    this.toggleLogout();
  }
}
