// import { Component, Input } from '@angular/core';
// import { FormControl } from '@angular/forms';
// @Input
//   @Input() label!: string;
//   @Input() control!: FormControl;
//   @Input() hint?: string;
//   @Input() placeholder?: string;
//   @Input() required: boolean = false;
//   @Input() disabled: boolean = false;
//   @Input() error?: string;
//   @Input() type: 'text' | 'email' | 'date' = 'text';


// @Component({
//   selector: 'app-kendo-input',
//   templateUrl: './kendo-input.component.html',
//   styleUrl: './kendo-input.component.scss'
// })
// export class KendoInputComponent {

// }

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kendo-input',
  templateUrl: './kendo-input.component.html',
})
export class KendoInputComponent {
  @Input() control!: FormControl;
  @Input() placeholder?: string;
  @Input() label!: string;
  @Input() type: 'text' | 'email' = 'text';
}

