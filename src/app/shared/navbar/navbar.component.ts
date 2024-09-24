import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    AppComponent,
    RouterLink,
    RouterLinkActive
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
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('closeIcon') closeIcon!: ElementRef;
  @ViewChild('modeIconContainer') modeIconContainer!: ElementRef;
  @ViewChild('modeIcon') modeIcon!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  menuOpen = false;


  constructor(private appComponent: AppComponent) { }


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
    this.content.nativeElement.style.justifyContent = 'center';
    this.menuIcon.nativeElement.style.display = 'none';
    this.menuContainer.nativeElement.style.display = 'flex';
    this.logoContainer.nativeElement.style.display = 'none';
    this.modeIconContainer.nativeElement.style.display = 'none';
  }


  closeMenu() {
    this.content.nativeElement.style.justifyContent = 'space-between';
    this.menuIcon.nativeElement.style.display = 'flex';
    this.menuContainer.nativeElement.style.display = 'none';
    this.logoContainer.nativeElement.style.display = 'flex';
    this.modeIconContainer.nativeElement.style.display = 'flex';
  }


  mode() {
    if (!this.appComponent.darkModeActive) {
      this.darkMode();
    } else {
      this.lightMode();
    }
  }


  lightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    this.menuIcon.nativeElement.src = './../../../assets/img/menu-black.svg';
    this.closeIcon.nativeElement.src = './../../../assets/img/close-black.svg';
    this.modeIcon.nativeElement.src = './../../../assets/img/darkmode-black.svg';
    this.appComponent.darkModeActive = false;
  }


  darkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    this.menuIcon.nativeElement.src = './../../../assets/img/menu-white.svg';
    this.closeIcon.nativeElement.src = './../../../assets/img/close-white.svg';
    this.modeIcon.nativeElement.src = './../../../assets/img/lightmode-white.svg';
    this.appComponent.darkModeActive = true;
  }
}