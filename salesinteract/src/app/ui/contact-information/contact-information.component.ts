import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.less']
})
export class ContactInformationComponent implements OnInit {
  isEdit: boolean = false;
  isMoreContacts: boolean = false;

  contactList: any = [
    { name: 'Grant Marshall', phone: '+1 (928) 123 445 345', online: false, image: 'https://photos.lci.fr/images/1280/720/david-marcus-facebook-messenger-1-196d55-0@1x.jpeg'},
    { name: 'Grant Solomonesck', phone: '+1 (928) 123 445 345', online: true, image: 'https://i11d.3djuegos.com/juegos/10674/sonic_boom/fotos/noticias/sonic_boom-4561471.jpg'},
    { name: 'Grantowner Moriskovich', phone: '+1 (928) 123 445 345', online: true, image: 'https://www.3dtotal.com/admin/new_cropper/gallery_736/2010-06-08(11514)_Luc_Begin_The_portrait%20cgs.jpg'},
    { name: 'Grant Marshall', phone: '+1 (928) 123 445 345', online: false, image: 'https://photos.lci.fr/images/1280/720/david-marcus-facebook-messenger-1-196d55-0@1x.jpeg'},
    { name: 'Grantowner Moriskovich', phone: '+1 (928) 123 445 345', online: false, image: 'data:image/jpeg;base64,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'},
    { name: 'Grant Solomonesck', phone: '+1 (928) 123 445 345', online: true, image: 'https://i11d.3djuegos.com/juegos/10674/sonic_boom/fotos/noticias/sonic_boom-4561471.jpg'},
    { name: 'Grantowner Moriskovich', phone: '+1 (928) 123 445 345', online: false, image: 'data:image/jpeg;base64,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'},
  ];

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  showMoreContacts(){
    this.isMoreContacts = !this.isMoreContacts;
  }
}
