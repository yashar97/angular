import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {


  public heroes: Hero[] = [];

  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    this.service.getHeroes().subscribe(data => {
      this.heroes = data;
    })
  }



}
