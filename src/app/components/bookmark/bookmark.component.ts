import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/mediaItem.model';
import { Observable } from 'rxjs';
import { MediaState } from '../../store/reducers/media.reducer';
import { Store } from '@ngrx/store';
import * as MediaActions from '../../store/actions/media.actions';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent implements OnInit {
  @Input() mediaItem!: MediaItem;
  @Input() isTrendingForSearch: boolean = false;
  screenWidth: number = window.innerWidth;
  isBookmarked: boolean = false;
  isHovered: boolean = false;
  isBookmarkHovered: boolean = false;

  constructor(private store: Store<MediaState>) {}

  ngOnInit(): void {
    this.onResize();
  }

  // Update screenWidth on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.screenWidth = window.innerWidth;
  }

  // Function to return the appropriate background image URL based on screen size and trending status
  getResponsiveBackgroundImage(thumbnail: any, isTrending: boolean): string {
    const imageSet = isTrending ? thumbnail.trending : thumbnail.regular;

    if (this.screenWidth < 768) {
      // Small screen (Mobile)
      return `url(${imageSet.small})`;
    } else if (this.screenWidth >= 768 && this.screenWidth < 1024) {
      // Medium screen (Tablet)
      return `url(${imageSet.medium || imageSet.large})`;
    } else {
      // Large screen (Desktop)
      return `url(${imageSet.large})`;
    }
  }

  toggleBookmark(id: string): void {
    this.isBookmarked = !this.isBookmarked;
    this.store.dispatch(MediaActions.toggleBookmark({ id }));
  }
}
