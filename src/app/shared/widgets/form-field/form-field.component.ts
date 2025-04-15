import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() hint?: string;
  @Input() error?: string;
  @Input() type: 'text' | 'email' | 'date' = 'text';
}
