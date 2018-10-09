import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.less']
})
export class SurveyPageComponent implements OnInit {
  surveyList = [
    { id: '1', name: 'Create new company form', published: true },
    { id: '2', name: 'Create new contact form', published: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
