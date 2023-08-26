import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGlobe, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'demo-micro-front-aside',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  protected readonly faGlobe = faGlobe;
  protected readonly faPercent = faPercent;
}
