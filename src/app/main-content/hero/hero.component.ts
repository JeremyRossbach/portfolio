import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('me') me!:ElementRef;


  laughing() {
    this.me.nativeElement.src = ''; // image of laughing
  }


  normal() {
    this.me.nativeElement.src = './../../../assets/img/placeholder.png'; // normal image
  }
}
