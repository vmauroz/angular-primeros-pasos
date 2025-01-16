import { Component } from "@angular/core";

@Component( {
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
    <hr>
    <h3>Counter: {{counter}}</h3>
    <p>
        Bienvenido a Angular Counter 2
    </p>
    <button (click)="increaseBy( +1)">+1</button>
    <button (click)="increaseBy( 0)">Reset</button>
    <button (click)="increaseBy( -1)">-1</button>
    `
})
export class CounterComponent {
    title: string = 'Mi aplicación Counter 2';
    counter: number = 0;

    // Será llamado cuando presionamos el boton +1
    increaseBy( value: number): void {
      if ( value != 0) {
        this.counter = this.counter + value;
      }
      else {
        this.counter = 0;
      }
    }
}
