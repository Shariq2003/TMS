import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './kendo-form-field.component.html',
  styleUrls: ['./kendo-form-field.component.scss']
})
export class KendoFormFieldComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() hint?: string;
  @Input() placeholder?: string;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error?: string;
  @Input() type: 'text' | 'email' | 'date' = 'text';
}
