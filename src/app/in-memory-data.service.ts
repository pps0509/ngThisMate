import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  
  createDb () {
    const heroes = [
        { id: 1, name: 'DeadPool' },
        { id: 2, name: 'Flash' },
        { id: 3, name: 'Batman' },
        { id: 4, name: 'Superman' },
        { id: 5, name: 'Hawkeye' },
        { id: 6, name: 'BlackWidow' },
        { id: 7, name: 'Thor' },
        { id: 8, name: 'Hulk' },
        { id: 9, name: 'Captain America' },
        { id: 10, name: 'Hitgirl' }
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
