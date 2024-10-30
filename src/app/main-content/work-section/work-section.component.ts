import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work-section',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsComponent,
    TranslateModule
  ],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss'
})
export class WorkSectionComponent {

}
