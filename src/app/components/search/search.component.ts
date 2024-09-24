import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  isTyping: boolean = false;
  isTypingInput() {
    this.isTyping = true;
    console.log('Typing...');
  }
  isTypingOutput() {
    this.isTyping = false;
    console.log('Not typing...');
  }
}
