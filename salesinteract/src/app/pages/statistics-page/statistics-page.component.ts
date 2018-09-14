import { Component, OnInit } from '@angular/core';
import { stat1, stat2, stat3 } from '../../model/many-models';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.less']
})
export class StatisticsPageComponent implements OnInit {
  contacten: any[];
  stat1: any[];
  stat2: any[];
  stat3: any[];
  view: any[] = [600, 200];
  colorScheme = {
    domain: ['#04a9f4', '#29b6f6', '#4fc3f7', '#80d4fa', '#b3e5fc', '#e1f5fe']
  };
  colorSchemeCircle = {
    domain: ['#f44336', '#673ab7', '#2196f3', '#8bc34a', '#ff5722', '#607d8b']
  };

  constructor() {
    Object.assign(this, { stat1, stat2, stat3 })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
