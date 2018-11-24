import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.less']
})
export class EmptyComponent implements OnInit {

  @Input() Title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
