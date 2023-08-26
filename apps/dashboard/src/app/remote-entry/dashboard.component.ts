import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faVectorSquare , faGlobe, faPercent} from "@fortawesome/free-solid-svg-icons";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { LineChartComponent } from "../line-chart/line-chart.component";
import { AreaChartComponent } from "../area-chart/area-chart.component";
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'demo-micro-front-nx-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, BarChartComponent, LineChartComponent, AreaChartComponent, RouterLink, HeaderComponent, AsideComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: `h-full`
  }
})
export class DashboardComponent {
  faVectorSquare = faVectorSquare;
  faGlobe = faGlobe;
  faPercent = faPercent;

}
