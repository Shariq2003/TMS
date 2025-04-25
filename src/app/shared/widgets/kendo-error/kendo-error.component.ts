import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kendo-error',
  templateUrl: './kendo-error.component.html',
  styleUrls: ['./kendo-error.component.scss']
})
export class KendoErrorComponent {
  @Input() control!: FormControl;
  @Input() error?: string;
}
