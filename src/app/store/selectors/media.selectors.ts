import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MediaState, adapter, selectAll } from '../reducers/media.reducer';
import { MediaItem } from '../../models/mediaItem.model';

// Feature selector for the media state
export const selectMediaState = createFeatureSelector<MediaState>('media');

// Entity selectors generated by the entity adapter
export const { selectAll: selectAllMediaItems } =
  adapter.getSelectors(selectMediaState);

// Selector for loaded state
export const selectMediaLoaded = createSelector(
  selectMediaState,
  (state: MediaState) => state.loaded
);

// 1.1 Select trending movies and TV shows
export const selectTrendingMoviesAndTVShows = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) => mediaItems.filter((item) => item.isTrending)
);

// 1.2 Select non-trending movies and TV shows
export const selectNonTrendingMoviesAndTVShows = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) => mediaItems.filter((item) => !item.isTrending)
);

// 2.1 Select trending movies
export const selectTrendingMovies = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) =>
    mediaItems.filter((item) => item.isTrending && item.category === 'Movie')
);

// 2.2 Select non-trending movies
export const selectNonTrendingMovies = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) =>
    mediaItems.filter((item) => !item.isTrending && item.category === 'Movie')
);

// 3.1 Select trending TV shows
export const selectTrendingTVShows = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) =>
    mediaItems.filter(
      (item) => item.isTrending && item.category === 'TV Series'
    )
);

// 3.2 Select non-trending TV shows
export const selectNonTrendingTVShows = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) =>
    mediaItems.filter(
      (item) => !item.isTrending && item.category === 'TV Series'
    )
);

// 4.1 Select bookmarked trending movies and TV shows
export const selectTrendingBookmarkedMoviesAndTVShows = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) =>
    mediaItems.filter((item) => item.isTrending && item.isBookmarked)
);

// 4.2 Select bookmarked non-trending movies and TV shows
export const selectNonTrendingBookmarkedMoviesAndTVShows = createSelector(
  selectAllMediaItems,
  (mediaItems: MediaItem[]) =>
    mediaItems.filter((item) => !item.isTrending && item.isBookmarked)
);

// Selector for search results
export const selectSearchResults = createSelector(
  selectMediaState,
  (state: MediaState) => state.searchResults
);

// // Dynamic Search Selectors
// export const selectAllBySearchTerm = (searchTerm: string) =>
//   createSelector(selectAll, (mediaItems: MediaItem[]) =>
//     mediaItems.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

// export const selectMoviesBySearchTerm = (searchTerm: string) =>
//   createSelector(selectAll, (mediaItems: MediaItem[]) =>
//     mediaItems.filter(
//       (item) =>
//         item.category === 'Movie' &&
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

// export const selectTVSeriesBySearchTerm = (searchTerm: string) =>
//   createSelector(selectAll, (mediaItems: MediaItem[]) =>
//     mediaItems.filter(
//       (item) =>
//         item.category === 'TV Series' &&
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

// export const selectBookmarkedBySearchTerm = (searchTerm: string) =>
//   createSelector(selectAll, (mediaItems: MediaItem[]) =>
//     mediaItems.filter(
//       (item) =>
//         item.isBookmarked &&
//         item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );
