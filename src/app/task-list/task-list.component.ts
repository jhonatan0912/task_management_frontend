import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/interfaces/task.interface';
import { TasksService } from '../shared/services/tasks.service';

import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  done: Task[] = [];

  constructor(
    private readonly tasksService: TasksService
  ) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasksService.get()
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks.filter((task) => !task.completed);
          this.done = tasks.filter((task) => task.completed);
        },
        error: (error) => {
          throw new Error(error);
        }
      });
  }

  onDelete(deleted: boolean) {
    if (!deleted) return;
    this.getAllTasks();
  }

  drop(event: CdkDragDrop<Task[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const { id, ...rest } = event.container.data[event.currentIndex];
      rest.completed = !rest.completed;
      this.tasksService.patch(id!, rest)
        .subscribe({
          next: (task) => {
            console.log(task);
          },
          error: (error) => {
            console.error('Error while making the PUT request:', error);
            throw new Error(error);
          }
        });
    }
  }


}
