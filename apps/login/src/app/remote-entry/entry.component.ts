import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'demo-micro-front-login-entry',
  template: `<demo-micro-front-nx-welcome></demo-micro-front-nx-welcome>`,
})
export class RemoteEntryComponent {}
