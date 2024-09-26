export interface ThumbnailSize {
  small: string;
  medium?: string;
  large: string;
}

export interface Thumbnail {
  trending?: ThumbnailSize;
  regular: ThumbnailSize;
}

export interface MediaItem {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
