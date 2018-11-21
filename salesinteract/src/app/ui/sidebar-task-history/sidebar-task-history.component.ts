import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-task-history',
  templateUrl: './sidebar-task-history.component.html',
  styleUrls: ['./sidebar-task-history.component.less']
})
export class SidebarTaskHistoryComponent implements OnInit {

  constructor() { }

  @Input() taskHistoryData;
  ngOnInit() {
  }

}
