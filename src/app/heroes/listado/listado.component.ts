import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  constructor() { 
    
   }

   borrarHeroe() {
     console.log('Borrando...');
    //  this.heroeBorrado = this.heroes[this.heroes.length-1];
    //  this.heroes = this.heroes.slice(0, this.heroes.length-1);

     this.heroeBorrado = this.heroes.shift() || '';

   }

}
