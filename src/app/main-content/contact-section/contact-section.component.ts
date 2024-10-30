import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    TranslateModule
],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {

}
