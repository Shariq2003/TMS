import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kendo-dropdown',
  templateUrl: './kendo-dropdown.component.html',
  styleUrls: ['./kendo-dropdown.component.scss'],
})
export class KendoDropdownComponent {
  @Input() dropdownData: { text: string; value: any }[] = [];
  @Input() default: string = 'Select';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl(null);
}
