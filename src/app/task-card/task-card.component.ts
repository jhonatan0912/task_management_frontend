import { Component, Input } from '@angular/core';
import { Task } from '../shared/interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: 'task-card.component.html',
  styleUrls: ['task-card.component.scss']
})
export class TaskCardComponent {

  @Input() task!: Task;

  borderColorClass: string = '';

  constructor() {
    this.getBorderColorClass();
  }

  getBorderColorClass() {
    const randomColorNumber = Math.floor(Math.random() * 8) + 1;
    this.borderColorClass = `color-task-${randomColorNumber}`;
  }


}
