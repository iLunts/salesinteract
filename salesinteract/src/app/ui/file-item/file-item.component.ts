import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FileItem } from '../../model/many-models';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.less']
})
export class FileItemComponent implements OnInit {
  _file: FileItem;
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  @Input()
  set file(file: FileItem) {
    this._file = file;
  }
  
  get file(): FileItem {
    return this._file;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
