import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    const { type } = this.activatedRoute.snapshot.params;

    console.log(type);
  }

  ngOnInit() {
  }

}
