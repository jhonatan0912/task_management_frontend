import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/services/tasks.service';
import { Task } from '../shared/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private readonly tasksService: TasksService) { }

  ngOnInit() {

    this.tasksService.get()
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks;
        },
        error: (error) => {
          throw new Error(error);
        }
      });
  }

}
