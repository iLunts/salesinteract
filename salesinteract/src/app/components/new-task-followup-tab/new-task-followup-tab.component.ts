import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-task-followup-tab',
  templateUrl: './new-task-followup-tab.component.html',
  styleUrls: ['./new-task-followup-tab.component.less']
})
export class NewTaskFollowupTabComponent implements OnInit {

  constructor() { }

  @Input() companyName: string;

  ngOnInit() {
  }

}
