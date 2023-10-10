import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../shared/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  id: string = '';
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
    const { id } = this.activatedRoute.snapshot.queryParams;
    this.id = id;
    this.type = type;
  }

  ngOnInit() {
    this.tasksService.getById(+this.id)
      .subscribe({
        next: (task) => {
          this.task = task;
        },
        error: (err) => {
          console.log(err);
        }
      });
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
    this.tasksService.patch(+this.id, this.task)
      .subscribe({
        next: () => {
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
