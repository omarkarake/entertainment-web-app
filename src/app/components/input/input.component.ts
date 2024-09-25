import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  isTyping: boolean = false;
  isErrored: boolean = false;
  @Input() placeholder: string = 'Type here...';
  isTypingInput() {
    this.isTyping = true;
    console.log('Typing...');
  }
  isTypingOutput() {
    this.isTyping = false;
    console.log('Not typing...');
  }
}
