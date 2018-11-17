import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  contactDataList: any;
  taskDataList: any;
  contactTaskDataList: any;

  constructor() { }

  @Input() contactData: any;
  @Input() taskData: any;
  
  ngOnInit() {
    this.contactDataList = Object.keys(this.contactData).map(key => ({ type: key, value: this.contactData[key] }));
    this.taskDataList = Object.keys(this.taskData).map(key => ({ type: key, value: this.taskData[key] }));
    
    this.contactTaskDataList = this.contactDataList.concat(this.taskDataList);
    this.contactTaskDataList.pop();
  }
  
  getColor(color){
    let setColor = '';
    
    switch(color){
      case 'lead': {
        setColor = '#77dafd'
        break;
      }
      case 'prospect': {
        setColor = '#fff400'
        break;
      }
      case 'customer': {
        setColor = '#9ad100'
        break;
      }
      case 'open': {
        setColor = '#0096e0'
        break;
      }
      case 'overdue': {
        setColor = '#ff000a'
        break;
      }
      default: {
        setColor = '#fff'
        break;
      }
    }

    return setColor;
  }

}
