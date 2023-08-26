import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-micro-front-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      dadas
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
