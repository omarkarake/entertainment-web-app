import { Component, HostListener, OnInit } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { MediaItem } from '../../models/model.mediaItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent implements OnInit {
  firstMediaItem$!: Observable<MediaItem[]>;
  screenWidth: number = window.innerWidth;
  isBookmarked: boolean = false;
  isTrending: boolean = false;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.firstMediaItem$ = this.mediaService.firstMediaItem$;
    this.firstMediaItem$.subscribe((data: MediaItem[]) => {
      console.log('First media item:', data[0]);
    });
    this.onResize();
  }

  // Update screenWidth on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event?: any): void {
    this.screenWidth = window.innerWidth;
  }

  // Function to return the appropriate background image URL based on screen size
  getResponsiveBackgroundImage(thumbnail: any): string {
    if (this.screenWidth < 768) {
      // Small screen (Mobile)
      return `url(${thumbnail.regular.small})`;
    } else if (this.screenWidth >= 768 && this.screenWidth < 1024) {
      // Medium screen (Tablet)
      return `url(${thumbnail.regular.medium})`;
    } else {
      // Large screen (Desktop)
      return `url(${thumbnail.regular.large})`;
    }
  }

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
  }
}
