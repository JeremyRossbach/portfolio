import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    AppComponent,
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('content') content!: ElementRef;
  @ViewChild('logoContainer') logoContainer!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('copyright') copyright!: ElementRef;
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('work') work!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('menuPoint') menuPoint!: ElementRef;
  @ViewChild('menuContainer') menuContainer!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('closeIcon') closeIcon!: ElementRef;
  @ViewChild('modeIconContainer') modeIconContainer!: ElementRef;
  @ViewChild('modeIcon') modeIcon!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('arrowdown') arrowdown!: ElementRef;
  @ViewChild('translateIcon') translateIcon!: ElementRef;
  @ViewChild('languageMenuContainer') languageMenuContainer!: ElementRef;
  @ViewChild('languageMobileMenuContainer') languageMobileMenuContainer!: ElementRef;
  @ViewChild('selectLanguage') selectLanguage!: ElementRef;
  @ViewChild('english') english!: ElementRef;
  @ViewChild('deutsch') deutsch!: ElementRef;

  menuOpen = false;
  languageMenuOpen = false;
  darkmode = false;


  constructor(private appComponent: AppComponent, private translate: TranslateService) { }


  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  logoEnter() {
    this.copyright.nativeElement.innerHTML = 'Roßbach';
  }


  logoLeave() {
    this.copyright.nativeElement.innerHTML = '©2024';
  }


  menu() {
    if (!this.menuOpen) {
      this.openMenu();
      this.menuOpen = true;
    } else {
      this.closeMenu();
      this.menuOpen = false;
    }
  }


  openMenu() {
    this.mobileMenu.nativeElement.style.display = 'flex';
    this.menuIcon.nativeElement.style.display = 'none';
    this.logoContainer.nativeElement.style.display = 'none';
  }


  closeMenu() {
    this.mobileMenu.nativeElement.style.display = 'none';
    this.menuIcon.nativeElement.style.display = 'flex';
    this.logoContainer.nativeElement.style.display = 'flex';
  }


  closeMobileMenu() {
    this.menuOpen = false;
    this.closeMenu();
  }


  languageMenu() {
    if (!this.languageMenuOpen) {
      this.openLanguageMenu();
      this.languageMenuOpen = true;
    } else {
      this.closeLanguageMenu();
      this.languageMenuOpen = false;
    }
  }


  openLanguageMenu() {
    this.languageMenuContainer.nativeElement.style.display = 'flex';
    if (!this.darkmode) {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowup-black.svg';
    } else {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowup-white.svg';
    }
  }


  closeLanguageMenu() {
    this.languageMenuContainer.nativeElement.style.display = 'none';
    if (!this.darkmode) {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowdown-black.svg';
    } else {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowdown-white.svg';
    }
  }


  mode() {
    if (!this.appComponent.darkModeActive) {
      this.darkMode();
    } else {
      this.lightMode();
    }
  }


  lightMode() {
    this.darkmode = false;
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    this.selectLanguage.nativeElement.classList.add('language-light-mode');
    this.selectLanguage.nativeElement.classList.remove('language-dark-mode');
    this.english.nativeElement.classList.add('language-light-mode');
    this.english.nativeElement.classList.remove('language-dark-mode');
    this.deutsch.nativeElement.classList.add('language-light-mode');
    this.deutsch.nativeElement.classList.remove('language-dark-mode');
    this.menuIcon.nativeElement.src = './../../../assets/img/menu-black.svg';
    this.modeIcon.nativeElement.src = './../../../assets/img/darkmode-black.svg';
    this.appComponent.darkModeActive = false;
    if (!this.languageMenuOpen) {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowdown-black.svg';
    } else {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowup-black.svg';
    }
  }


  darkMode() {
    this.darkmode = true;
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    this.selectLanguage.nativeElement.classList.add('language-dark-mode');
    this.selectLanguage.nativeElement.classList.remove('language-light-mode');
    this.english.nativeElement.classList.add('language-dark-mode');
    this.english.nativeElement.classList.remove('language-light-mode');
    this.deutsch.nativeElement.classList.add('language-dark-mode');
    this.deutsch.nativeElement.classList.remove('language-light-mode');
    this.menuIcon.nativeElement.src = './../../../assets/img/menu-white.svg';
    this.modeIcon.nativeElement.src = './../../../assets/img/lightmode-white.svg';
    this.appComponent.darkModeActive = true;
    if (!this.languageMenuOpen) {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowdown-white.svg';
    } else {
      this.arrowdown.nativeElement.src = './../../../assets/img/arrowup-white.svg';
    }
  }


  switchLanguage(language: string) {
    this.translate.use(language);
    this.closeLanguageMenu();
    this.languageMenuOpen = false;
  }
}