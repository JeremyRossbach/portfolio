import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any = [];

  constructor(private translate: TranslateService) {
    this.translate.get(['description.elPolloLoco', 'description.join']).subscribe(translations => {
      this.projects = [
        {
          nr: '01/02',
          img: './assets/img/pollo-loco-example.png',
          title: 'El Pollo Loco',
          description: translations['description.elPolloLoco'],
          languages: 'HTML | CSS | JavaScript',
          github: 'https://github.com/JeremyRossbach/el-pollo-loco',
          livetest: 'https://el-pollo-loco.jeremyseanrossbach.com/'
        },
        {
          nr: '02/02',
          img: './assets/img/join-example.png',
          title: 'Join',
          description: translations['description.join'],
          languages: 'HTML | CSS | JavaScript | Firebase',
          github: 'https://github.com/JeremyRossbach/join',
          livetest: 'https://join.jeremyseanrossbach.com/'
        }
      ];
    });
  }
}
