import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../store/models/tasks.model';

@Pipe({
  name: 'taskFilter',
  pure: true 
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], searchTerm: string): Task[] {
    if (!tasks || !searchTerm) {
      return tasks;
    }

    const lowerTerm = searchTerm.toLowerCase();

    return tasks.filter(task => {
      return Object.values(task).some(value =>
        String(value).toLowerCase().includes(lowerTerm)
      );
    });
  }
}
