import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kendo-textarea',
  templateUrl: './kendo-textarea.component.html',
  styleUrls: ['./kendo-textarea.component.scss']
})
export class KendoTextareaComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() rows: number = 3;
}
