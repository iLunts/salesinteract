import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-history-list',
  templateUrl: './task-history-list.component.html',
  styleUrls: ['./task-history-list.component.less']
})
export class TaskHistoryListComponent implements OnInit {
  isOpenSidebar: boolean = false;

  constructor() { }

  @Input() taskData: any;

  ngOnInit() {
    
  }

  openSidebar(){
    this.isOpenSidebar = !this.isOpenSidebar;
  }

}
