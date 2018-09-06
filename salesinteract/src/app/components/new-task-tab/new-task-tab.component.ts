import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-task-tab',
  templateUrl: './new-task-tab.component.html',
  styleUrls: ['./new-task-tab.component.less']
})
export class NewTaskTabComponent implements OnInit {
  taskType = '';

  constructor() { }

  ngOnInit() {

  }
    changeTaskType(type){
      this.taskType = type;
    }

}
