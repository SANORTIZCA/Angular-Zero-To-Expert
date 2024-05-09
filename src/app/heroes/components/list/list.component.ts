import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "IronMan", "Hulk", "She Hulk", "Thor"];
  public deletedHero?: string = "";

  protected removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
