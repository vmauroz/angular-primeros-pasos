import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor( private dbzService: DbzService) {};
   
    get characterList(): Character[]{
        return [...this.dbzService.characters];

    }

    onNewCharacter( character: Character) {
        this.dbzService.addCharacter( character);

    }

    onDeleteCharacter( id: string): void {
        this.dbzService.deletePersonajeById( id);

    }
}
