import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Condorito';
  }

  public changeAge(): void {
    this.age = 105;
  }

  public resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;

    // document.querySelectorAll( 'h1').forEach( element => {
    //   element.innerHTML = '<h1> Desde Angular';
    // }
    //)

  }
}
