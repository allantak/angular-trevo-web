import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  active: boolean = false;

  toggleActive(){
    this.active = !this.active;
  }

  imageUrlLogo: string = 'assets/logo.png';
  imageUrlWhatsapp: string = 'assets/whatsapp.png';
}
