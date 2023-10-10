import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../shared/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.scss']
})
export class TaskFormComponent {

  type: string = '';
  task = {
    title: '',
    description: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router,
  ) {
    const { type } = this.activatedRoute.snapshot.params;
    this.type = type;
  }


  submit() {
    this.type === 'create' ? this.create() : this.update();
  }

  create() {
    this.tasksService.post(this.task)
      .subscribe({
        next: () => {
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  update() {

  }

}
