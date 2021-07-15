import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  //Propiedades
  heroes: string[] = ['Dennys','batman','Superman','Dodoria','Vegeta'];

  eliminado:string = '...';
  flag:boolean = false;
  
  
  //metodos
  deleteHeroe( n:number ):void {
    
    this.flag = true;
    console.log(this.flag);
    this.eliminado = this.heroes[n];
    this.heroes.splice(n,1);
  }
}
