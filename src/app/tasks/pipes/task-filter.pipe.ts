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
      return (
        task.id.includes(lowerTerm) ||
        task.title.toLowerCase().includes(lowerTerm) ||
        task.description.toLowerCase().includes(lowerTerm) ||
        task.status.toLowerCase().includes(lowerTerm) ||
        task.priority.toLowerCase().includes(lowerTerm) ||
        task.assigned.toLowerCase().includes(lowerTerm)
      );
    });
  }
}
