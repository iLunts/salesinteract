import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-complete-task',
  templateUrl: './complete-task.component.html',
  styleUrls: ['./complete-task.component.less']
})
export class CompleteTaskComponent implements OnInit {
  viewCompleteTask: any[] = [400, 200];
  colorSchemeCompleteTask = {
    domain: ['#FFDA83', '#FF8373', '#56D9FE', '#A3A0FB']
  };

  
  @Input() completeData: any;
  constructor() { }
  
  ngOnInit() {
  }

}
