import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <h1>404 Component</h1>
  <a routerLink="/">Go Home</a>`,
})

export class NotFoundComponent {
}
