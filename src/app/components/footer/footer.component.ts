import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private elementRef: ElementRef) { }

  imgFacebook: string = 'assets/social-midia/facebook.png';
  imgTwitter: string = 'assets/social-midia/twitter.png';
  imgInstragram: string = 'assets/social-midia/instagram.png';
  imgYoutube: string = 'assets/social-midia/youtube.png';
  imgLogoVerde: string = 'assets/logo-verde.png';
  imgSetaTop: string = 'assets/seta-top.png';

  mostrarBotaoScrollTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const footerOffsetTop = this.elementRef.nativeElement.querySelector('footer').offsetTop;

    this.mostrarBotaoScrollTop = window.pageYOffset > footerOffsetTop - 800;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
