import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-information',
  templateUrl: './manager-information.component.html',
  styleUrls: ['./manager-information.component.less']
})
export class ManagerInformationComponent implements OnInit {
  isEdit: boolean = false;
  
  managerList: any = [
    { online: true, name: 'Coen van der Kolk', email: 'info@wald-int.com', image: 'http://dreamicus.com/data/face/face-06.jpg'},
    { online: false, name: 'Grant Solomonesck', email: 'info@wald-int.com', image: 'https://images.asos-media.com/products/bejsbolka-chernyj-belyj-the-north-face-the-norm/10265685-1-black?$XL$?$XXL$&wid=300&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=1,0.4,6,1&iccEmbed=0&printRes=72'},
    { online: true, name: 'Grantowner Moriskovich', email: 'info@wald-int.com', image: 'https://resources.stuff.co.nz/content/dam/images/1/n/t/2/j/z/image.related.StuffLandscapeSixteenByNine.620x349.1nqgze.png/1515968097908.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

}
