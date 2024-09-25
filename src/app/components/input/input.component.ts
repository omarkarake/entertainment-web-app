import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Type here...'; // Placeholder for the input
  @Input() control: FormControl = new FormControl(''); // Reactive form control

  isTyping: boolean = false;
  value: string = '';

  // Callbacks for control value accessor
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  // Handles typing input
  isTypingInput() {
    this.isTyping = true;
  }

  // Handles focus-out event
  isTypingOutput() {
    this.isTyping = false;
    this.onTouched(); // Mark control as touched
  }

  // Input event handling
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.value = value;
    this.onChange(value);
    this.control.setValue(value); // Sync the form control value
  }

  // Implement writeValue to sync the value from parent component
  writeValue(value: string | null): void {
    this.value = value || '';
    if (this.control) {
      this.control.setValue(this.value, { emitEvent: false });
    }
  }

  // Register change function to propagate input value
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Register touched function
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Set disabled state for the input
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  // Check if the control is invalid and touched to display error
  isErrored(): boolean {
    return this.control.invalid && this.control.touched;
  }
}
