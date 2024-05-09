import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "iron Man";
  public age:number = 45;

  public get capitalizedName():string{
    return this.name.toUpperCase();
  }

  protected getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  protected changeHero():void{
    //ToDo: Implementar
    //throw new Error("Method not implemented.");
    this.name = "Spiderman";
  }

  protected changeAge():void{
    this.age = 25;
  }

  protected resetForm():void{
    this.name = "iron Man";
    this.age = 45;
  }

}
