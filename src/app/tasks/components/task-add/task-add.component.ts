import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateTask } from '../../store/actions/tasks.action';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss'
})
export class TaskAddComponent implements OnInit {
  taskForm!: FormGroup;

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [null, Validators.required],
      priority: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      assigned: ['', Validators.required],
    });
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

  onAdd(): void {
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
    console.log('newTask', newTask);
    this.store.dispatch(new CreateTask(newTask)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  formatDate(date: Date | null): string {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
