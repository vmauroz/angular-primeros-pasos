import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'false'}
})
export class AppComponent {
  title: string = 'Mi primera aplicación Angular 2024/11/19';
  public counter: number = 0;

  // Será llamado cuando presionamos el boto +1
  increaseBy( value: number): void {
    if ( value != 0) {
      this.counter = this.counter + value;
    }
    else {
      this.counter = 0;
    }
  }
}
