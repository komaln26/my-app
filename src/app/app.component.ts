import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 

  
    <app-tab></app-tab>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
title = 'my-app'
}

// <br/><br /><br/><br /><br/><br />
// <app-form><app-form>