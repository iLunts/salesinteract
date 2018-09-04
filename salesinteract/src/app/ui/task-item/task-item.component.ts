import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/many-models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.less']
})
export class TaskItemComponent implements OnInit {
  private _task: Task;

  constructor() { }

  ngOnInit() {}

  @Input()
  set task(task: Task) {
    this._task = task;
  }

  get task(): Task {
    return this._task;
  }
}
