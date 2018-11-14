import { Component, OnInit } from '@angular/core';
import { TreeModel, NodeEvent } from 'ng2-tree';

@Component({
  selector: 'app-shared-files-page',
  templateUrl: './shared-files-page.component.html',
  styleUrls: ['./shared-files-page.component.less']
})
export class SharedFilesPageComponent implements OnInit{

  constructor() { }

  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };
  
  fileList: any = [
    { name: '121_m123a.jpg', added: '14 Jun.  2018 21:07', view: '21:07', image: 'https://cdn.thehandbook.com/app/uploads/2018/06/R0w8EMxlmD.jpeg' },
    { name: '1ds231_m123a.jpg', added: '23 Feb.  2017 12:01', view: '12:01 ', image: 'http://static2.uk.businessinsider.com/image/58f4e95bdd0895997d8b48d8-1190-625/6-things-you-should-never-store-on-your-work-computer.jpg' },
    { name: 'm1-35523a.jpg', added: '12 Mar.  2018 08:00', view: '08:00', image: 'https://assets.entrepreneur.com/content/3x2/2000/20180717215329-GettyImages-872892842.jpeg?width=700&crop=2:1' },
  ];
  
  ngOnInit() {
    
  }
}
