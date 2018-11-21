import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-task-history',
  templateUrl: './sidebar-task-history.component.html',
  styleUrls: ['./sidebar-task-history.component.less']
})
export class SidebarTaskHistoryComponent implements OnInit {

  @Input() taskHistoryData;

  @Input() hidden = false;
  @Output() hiddenChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }


  close() {
    this.hidden = false;
    this.hiddenChange.emit(this.hidden);
  }

}
