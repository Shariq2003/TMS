import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateTask,UpdateTask } from '../../store/actions/tasks.action';
import { Task } from '../../store/models/tasks.model';
import { TasksState } from '../../store/states/tasks.state';
import { NotificationsService } from '../../services/notification/notifications.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss'
})
export class TaskAddComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: string;
  taskToEdit!: Task ;
  PageTitle: string = "";
  formType: string = "";
  get titleControl() {
    return this.taskForm.get('title') as FormControl;
  }

  get descriptionControl() {
    return this.taskForm.get('description') as FormControl;
  }

  get statusControl(): FormControl {
    return this.taskForm.get('status') as FormControl;
  }

  get priorityControl(): FormControl {
    return this.taskForm.get('priority') as FormControl;
  }
  get assignedControl() {
    return this.taskForm.get('assigned') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    if (this.router.url.split('/')[1]==="add") {
      this.formType = "add";
      this.PageTitle = "Add New Task";
      this.taskForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        status: [null, Validators.required],
        priority: [null, Validators.required],
        startDate: [new Date(), Validators.required],
        endDate: [new Date(), Validators.required],
        assigned: ['', Validators.required],
      });
    }
    else{
      this.formType = "edit";
      this.PageTitle = "Edit Task";
      this.taskId = this.router.url.split("/")[2];
      const tasks = this.store.selectSnapshot(TasksState.getTasks);
      const task = tasks.find(t => t.id === this.taskId) || null;
      if (!task) {
        this.router.navigate(['']);
        return;
      }
      this.taskToEdit = task;

      this.taskForm = this.fb.group({
        title: [task.title, Validators.required],
        description: [task.description],
        status: [task.status, Validators.required],
        priority: [task.priority, Validators.required],
        startDate: [task.startDate, Validators.required],
        endDate: [task.endDate, Validators.required],
        assigned: [task.assigned, Validators.required],
      });
    }
  }
  mergeDateWithTime(dateOnly: Date | null, timeFrom: Date): Date | null {
    if (!dateOnly) return null;

    const merged = new Date(dateOnly);
    merged.setHours(timeFrom.getHours());
    merged.setMinutes(timeFrom.getMinutes());
    merged.setSeconds(timeFrom.getSeconds());
    merged.setMilliseconds(timeFrom.getMilliseconds());
    return merged;
  }

  onDateRangeChanged(range: { startDate: Date | null; endDate: Date | null }) {
    this.taskForm.patchValue({
      startDate: range.startDate,
      endDate: range.endDate,
    });
  }

  onSubmit(event?: Event): void {
    if(this.router.url.split('/')[1]==="add") {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (this.taskForm.invalid) {
        this.taskForm.markAllAsTouched();
        this.notificationsService.showError('Please fill all required fields');
        return;
      }
      const now = new Date();
      const startDate = this.mergeDateWithTime(
        this.taskForm.value.startDate,
        now
      );
      const endDate = this.mergeDateWithTime(this.taskForm.value.endDate, now);
      const newTask = {
        id: 0,
        ...this.taskForm.value,
        startDate,
        endDate,
      };
      this.store.dispatch(new CreateTask(newTask)).subscribe(() => {
        this.notificationsService.showSuccess('Task Created Successfully');
        this.router.navigate(['/']);
      });
    }
    else{
      if (this.taskForm.invalid){
        this.taskForm.markAllAsTouched();
        this.notificationsService.showError('Please fill all required fields');
        return;
      }
      const updatedTask: Task = {
        ...this.taskToEdit,
        ...this.taskForm.value
      };
    
      this.store.dispatch(
        new UpdateTask({
          id: this.taskId,  
          task: updatedTask
        })
      ).subscribe(() => {
        this.notificationsService.showSuccess('Task Updated Successfully');
        this.router.navigate(['/']);
      });
    }
  }
  transformDate(date: any): Date {
    return new Date(date);
  }
}
