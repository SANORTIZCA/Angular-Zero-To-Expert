import { Component} from '@angular/core';

import { Character } from './../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  /* Inyección de dependencias: D.I, casí siempre es privado*/

  /*   También se puede hacer así:
  public _dbzService: DbzService;
    constructor(dbzService: DbzService) {
    this._dbzService = dbzService;
  } */
  /* RECOMENDACIÓN: Servicios privados */
  constructor(private dbzService: DbzService) {}

  public get characters():Character[]{
    /* Con ... spreed se crea una nueva instancia de el objeto, por lo tanto no se pasa por referencia*/
    return [...this.dbzService.characters];
  }

  public onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);

  }

  public onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
};
