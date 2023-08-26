import { Component, ViewEncapsulation, Input, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";
import {
  BreadcrumbModule,
  ButtonModule,
  IconModule,
  TableHeaderItem,
  TableItem,
  TableModel,
  TableModule
} from "carbon-components-angular";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'demo-micro-front-nx-welcome',
  standalone: true,
  imports: [CommonModule, AsideComponent, HeaderComponent, TableModule, ButtonModule, IconModule, BreadcrumbModule, RouterLink],
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.scss']
})
export class NxWelcomeComponent implements OnInit {
  @Input() model = new TableModel();
  @Input() size = "md";
  @Input() showSelectionColumn = true;
  @Input() enableSingleSelect = false;
  @Input() striped = true;
  @Input() sortable = true;
  @Input() isDataGrid = false;
  @Input() noData = false;
  @Input() stickyHeader = false;
  @Input() skeleton = false;

  ngOnInit(): void {
      this.model.header = [
        new TableHeaderItem({
          data: "Name",
          title: "Table header title"
        }),
        new TableHeaderItem({
          data: "hwer",
          className: "my-class"
        })
      ];

      this.model.rowsSelectedChange.subscribe(event => console.log(event));
      this.model.selectAllChange.subscribe(event => console.log(event ? "All rows selected!" : "All rows deselected!"));

      if (!this.noData && !this.skeleton) {
        this.model.data = [
          [new TableItem({ data: "Name 1", title: "Table item title" }), new TableItem({ data: "qwer" })],
          [new TableItem({ data: "Name 3" }), new TableItem({ data: "zwer" })],
          [new TableItem({ data: "Name 2" }), new TableItem({ data: "swer" })],
          [new TableItem({ data: "Name 4" }), new TableItem({data: "twer"})],
          [new TableItem({ data: "Name 5" }), new TableItem({data: "twer"})],
          [new TableItem({ data: "Name 6" }), new TableItem({data: "twer"})],
          [new TableItem({ data: "Name 7" }), new TableItem({data: "twer"})]
        ];
      }

  }


}
