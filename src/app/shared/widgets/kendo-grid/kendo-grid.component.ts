import { Component, OnInit, Input } from '@angular/core';
import TaskActions from '../../../tasks/store/models/taskActions.model';
import { Task } from '../../../tasks/store/models/tasks.model';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss']
})
export class KendoGridComponent {
  @Input() gridData: Task[] = [];
  @Input() actions: TaskActions[] = [];
  @Input() handleClick : (id:string) => void = () => {};

  @Input() columnFields: any[] = [];
}
