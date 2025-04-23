import { Component, Input, Output, EventEmitter } from '@angular/core';
import  TaskActions  from '../../../tasks/store/models/taskActions.model';

@Component({
  selector: 'app-kendo-button',
  templateUrl: './kendo-button.component.html',
  styleUrl: './kendo-button.component.scss',
})
export class KendoButtonComponent {
  @Input() buttonText: string = '';
  @Input() action: TaskActions = { class: '', color: '', link: '', type: '' };
  @Input() routerLink: any[] = [];
  @Input() dataItem: any = {};
  @Output() handleClick = new EventEmitter<number>();
  onClick() {
    this.handleClick.emit();
  }
}
