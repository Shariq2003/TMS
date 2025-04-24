import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kendo-label',
  templateUrl: './kendo-label.component.html',
})
export class KendoLabelComponent {
  @Input() label!: string;
}
