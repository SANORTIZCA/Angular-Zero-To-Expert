import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  /*
    Input = Emitir información del padre al hijo
    @Output = Emitir información del hijo al padre
    RXJS = programación reactiva en Angular
    Suscribirse significa estar escuchando las emisiones que el objeto hace a lo largo de su vida
    EventEmitter = Clase que permite emitir eventos, es generica, se le debe indicar el tipo de dato que se va a emitir

  */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  protected emitCharacter(): void {
    /* debugger, Sirve para pausar la app y mirar como esta funcionando */

    if(this.character.name.length === 0) return;
    if(this.character.power < 0) return;

    /* De esta forma se emite la información del personaje, en JS todo pasa por referencia */
    /* this.onNewCharacter.emit({...this.character}); //De esta manera nos encargamos de enviar un nuevo objeto, aunque Angular se encarga de esto */
    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    };
  }
}
