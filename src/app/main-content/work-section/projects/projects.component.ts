import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      nr: '01/02',
      img: './assets/img/pollo-loco-example.png',
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      languages: 'HTML | CSS | JavaScript',
      github: 'https://github.com/JeremyRossbach/el-pollo-loco',
      livetest: 'https://el-pollo-loco.jeremyseanrossbach.com/'
    },
    {
      nr: '02/02',
      img: './assets/img/join-example.png',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: 'HTML | CSS | JavaScript | Firebase',
      github: 'https://github.com/JeremyRossbach/join',
      livetest: 'https://join.jeremyseanrossbach.com/'
    }
  ];
}
