import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  template: '<div id="root" #vc></div>',
})
export class WrapperComponent implements AfterContentInit {

  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  ngAfterContentInit(): void {
    loadRemoteModule('react-app', './web-components')
      .then(() => console.debug('react-app loaded'))
      .catch((err: any) => console.error(`error loading react-app:`, err)); 
  }

}