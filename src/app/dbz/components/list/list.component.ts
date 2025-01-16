import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input('listaPersonajes')
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter;

  deleteCharacter(id?: string): void {
    console.log("onDelete")
    console.log({id});

    if ( !id) {
      return;
    }
    
    this.onDeleteId.emit( id);

  }
}
