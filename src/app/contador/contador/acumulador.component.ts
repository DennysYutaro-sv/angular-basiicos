


import { Component } from "@angular/core";

@Component({
    selector: 'app-acumulador',
    template: `
        <h1>{{ title }}</h1>
        <h4>La base es: <strong>{{base}}</strong></h4>
        <button (click)="Acumulador(base)"> +1  </button>
        <span>{{ nro }}</span>
        <button (click)="Acumulador(-base)" > -1 </button>
    `
})
export class AcumuladorComponent {
    title: string = 'Contador App';
    nro:number = 0;
  
    //La base
    base:number = 5;
  
    //metodos del componente
    Acumulador(acumulador:number){
      this.nro += acumulador; 
    }
  }