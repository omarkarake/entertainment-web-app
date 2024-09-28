import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  isTyping: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the search form with form control and validation
    this.searchForm = this.fb.group({
      search: ['', [Validators.minLength(3)]], // Min length of 3 characters
    });

    // Subscribe to the search control value changes with debounce and distinctUntilChanged
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // 300ms debounce time
        distinctUntilChanged() // Only emit when the value changes
      )
      .subscribe((searchValue: string) => {
        console.log('Search Value:', searchValue); // Log the search value
      });
  }

  get searchControl(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  // Detect when typing starts
  isTypingInput() {
    this.isTyping = true;
  }

  // Detect when typing ends
  isTypingOutput() {
    this.isTyping = false;
  }
}
