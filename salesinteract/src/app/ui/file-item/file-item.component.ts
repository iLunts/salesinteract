import { Component, OnInit, Input } from '@angular/core';
import { FileItem } from '../../model/many-models';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.less']
})
export class FileItemComponent implements OnInit {
  private _file: FileItem;

  constructor() { }

  ngOnInit() { }

  @Input()
  set file(file: FileItem) {
    this._file = file;
  }
  
  get file(): FileItem {
    return this._file;
  }

}
