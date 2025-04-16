import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kendo-dropdown',
  templateUrl: './kendo-dropdown.component.html',
  styleUrl: './kendo-dropdown.component.scss'
})
export class KendoDropdownComponent {
 
  @Input()  dropdownData : Array<string> = [];

  @Input() label: string = '';

  @Output() selectionChange = new EventEmitter<string>();
  selectedvalue: string = '';

  onValueChange(value : string ){
    this.selectionChange.emit(value);
  }
}
