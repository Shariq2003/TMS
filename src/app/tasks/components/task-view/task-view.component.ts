import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { TasksState } from '../../store/states/tasks.state';
import { Task } from '../../store/models/tasks.model';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})

export class TaskViewComponent implements OnInit{
task: Task | null = null;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void 
  {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      const tasks = this.store.selectSnapshot(TasksState.getTasks);
      this.task = tasks.find(t => t.id === taskId) || null;
    }
    
  }


}
