import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-survey-edit-page',
  templateUrl: './survey-edit-page.component.html',
  styleUrls: ['./survey-edit-page.component.less']
})
export class SurveyEditPageComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      },
      // moves: (el, container, handle) => {
      //   return handle.className === 'dragula__handle';
      // }
    });
  }

  ngOnInit() {
  }

}
