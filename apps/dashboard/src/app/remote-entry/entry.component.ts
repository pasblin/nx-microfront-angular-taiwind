import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@Component({
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  selector: 'demo-micro-front-dashboard-entry',
  template: `<demo-micro-front-nx-dashboard></demo-micro-front-nx-dashboard>`,
})
export class RemoteEntryComponent {}
