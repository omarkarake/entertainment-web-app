// navigation.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeFeatureSource = new BehaviorSubject<string>('main'); // Default feature
  activeFeature$ = this.activeFeatureSource.asObservable();

  constructor(private router: Router) {}

  // Set the active feature and navigate to the route
  setActiveFeature(feature: string) {
    this.activeFeatureSource.next(feature);
    switch (feature) {
      case 'main':
        this.router.navigate(['/home/main']);
        break;
      case 'movies':
        this.router.navigate(['/home/movies']);
        break;
      case 'tv-series':
        this.router.navigate(['/home/tv-series']);
        break;
      case 'bookmarked':
        this.router.navigate(['/home/bookmarked']);
        break;
      default:
        this.router.navigate(['/home/main']);
    }
  }

  // Get the current active feature
  getActiveFeature(): string {
    return this.activeFeatureSource.getValue();
  }
}
