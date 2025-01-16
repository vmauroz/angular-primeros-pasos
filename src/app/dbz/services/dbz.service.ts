import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

console.log('uuid ' + uuid());

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 100 },
        { 
            id: uuid(),
            name: 'Gokú',
            power: 9500
        }, {
            id: uuid(),
            name: 'Vegeta',
            power: 1000
        }];

    addCharacter(character: Character): void {
        console.log("Main-page")
        

        // this.characters.unshift(character);

        const newCharacter: Character = {id: uuid(), ...character}
        console.log( {newCharacter});
        this.characters.unshift(newCharacter);


    }

    // onDeletePersonaje( index: number) {
    //     console.log("list.component")
    //     console.log( {index});

    //     console.log(this.characters.splice(index, 1));

    //     this.characters = this.characters.filter( character => character.id !== id);
    // }

    deletePersonajeById( id: string) {
        console.log("list.component delete new")
        console.log( {id});
        
        // filtra el arreglo original y genera uno nuevo de acuerdo a a condición, solo retornará los que sean distintos al id recibido
        this.characters = this.characters.filter( character => character.id !== id);
    }
    
}