import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kendo-error',
  template: `
    <kendo-formerror *ngIf="control?.invalid && control?.touched">
      {{ error }}
    </kendo-formerror>
  `
})
export class KendoErrorComponent {
  @Input() control!: FormControl;
  @Input() error?: string;
}
