import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-history-list',
  templateUrl: './task-history-list.component.html',
  styleUrls: ['./task-history-list.component.less']
})
export class TaskHistoryListComponent implements OnInit {
  showCount: number = 4;

  constructor() { }

  @Input() taskData: any;

  ngOnInit() {
    
  }

}
