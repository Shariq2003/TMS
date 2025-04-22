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

  public columnFields: string[] = [];

  setColumnFields(item: Task): boolean {
    if (this.gridData.length > 0) {
      this.columnFields = this.extractFields(this.gridData[0]);
    }
    return true;
  }

  private extractFields(obj: any, prefix: string = ''): string[] {
    const fields: string[] = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
          const nestedFields = this.extractFields(value, `${prefix}${key}.`);
          fields.push(...nestedFields);
        } else {
          fields.push(`${prefix}${key}`);
        }
      }
    }
    return fields;
  }

  formatTitle(field: string): string {
    if (!field){
      return field;
    } 
    const updatedField = field.replace(/([A-Z])/g, ' $1');
    return updatedField.charAt(0).toUpperCase() + updatedField.slice(1);
  }
}
