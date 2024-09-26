import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeFeatureSource = new BehaviorSubject<string>('main'); // Default feature
  activeFeature$ = this.activeFeatureSource.asObservable();

  // Set the active feature
  setActiveFeature(feature: string) {
    this.activeFeatureSource.next(feature);
  }

  // Get the current active feature
  getActiveFeature(): string {
    return this.activeFeatureSource.getValue();
  }
}
