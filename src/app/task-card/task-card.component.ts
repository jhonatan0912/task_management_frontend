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

  borderColorClass: string = '';

  constructor(
    private readonly router: Router,
    private readonly taskService: TasksService
  ) {
    this.getBorderColorClass();
  }

  getBorderColorClass() {
    const randomColorNumber = Math.floor(Math.random() * 8) + 1;
    this.borderColorClass = `color-task-${randomColorNumber}`;
  }

  onEdit(id: number) {
    this.router.navigate([`/tasks/${id}`]);
  }

  onDelete(id: number) {
    this.taskService.delete(id)
      .subscribe({
        next: () => {
          console.log('Task deleted successfully');
          this.onDeleteEmitter.emit(true);
        },
        error: (error) => {
          this.onDeleteEmitter.emit(false);
          console.log('Error deleting task', error);
        }
      })
  }
}
