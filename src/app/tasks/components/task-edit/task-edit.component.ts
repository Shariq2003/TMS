import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UpdateTask } from '../../store/actions/tasks.action';
import { TasksState } from '../../store/states/tasks.state';
import { Task } from '../../store/models/tasks.model';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent {

taskForm!: FormGroup;
taskId!: string;
taskToEdit!: Task ;

get titleControl(): FormControl {
  return this.taskForm.get('title') as FormControl;
}

get descriptionControl(): FormControl {
  return this.taskForm.get('description') as FormControl;
}

get statusControl(): FormControl {
  return this.taskForm.get('status') as FormControl;
}

get priorityControl(): FormControl {
  return this.taskForm.get('priority') as FormControl;
}


constructor(
  private route: ActivatedRoute,
  private store: Store,
  private fb: FormBuilder,
  private router: Router
) {}

ngOnInit(): void {
  this.taskId = this.route.snapshot.paramMap.get('id')! ;
  const tasks = this.store.selectSnapshot(TasksState.getTasks);
  const task = tasks.find(t => t.id === this.taskId) || null;
  // this.taskForm.setValue({
  //   title: task?.title || '',
  //   description: task?.description || '',
  //   status: task?.status || 'Pending',
  //   priority: task?.priority || 'Low'
  // })
  if (!task) {
    this.router.navigate(['']);
return;
}

this.taskToEdit = task;

this.taskForm = this.fb.group({
  title: [task.title, Validators.required],
  description: [task.description],
  status: [task.status, Validators.required],
  priority: [task.priority, Validators.required]  
});



}

onUpdate(): void {
  if (this.taskForm.invalid) return;

  const updatedTask: Task = {
    ...this.taskToEdit,
    ...this.taskForm.value
  };

  this.store.dispatch(
    new UpdateTask({
      id: +this.taskId,  
      task: updatedTask
    })
  ).subscribe(() => {
    this.router.navigate(['/']);
  });
  
}

}
