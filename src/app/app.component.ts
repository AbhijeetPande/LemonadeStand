import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpen = false;
  edited = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleEdited(v:boolean) {
    this.edited = v;
  }
  title = 'angular-lemonade-stand';
}
