import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/interfaces/task.interface';
import { TasksService } from '../shared/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-card',
  templateUrl: 'task-card.component.html',
  styleUrls: ['task-card.component.scss']
})
export class TaskCardComponent {

  @Input() task!: Task;

  @Output() onDeleteEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router,
    private readonly taskService: TasksService
  ) { }

  onEdit(id: number) {
    this.router.navigate([`/tasks/edit`], { queryParams: { id: id } });
  }

  onDelete(id: number) {
    this.taskService.delete(id)
      .subscribe({
        next: () => {
          this.onDeleteEmitter.emit(true);
        },
        error: (error) => {
          this.onDeleteEmitter.emit(false);
        }
      });
  }
}
