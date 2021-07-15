import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from './hero/hero.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroComponent,
        ListadoComponent
    ],
    //Quem quiero hacer de mis componentes publicos o privados
    exports: [
        ListadoComponent
    ],
    //Aca se importaran los modulos unicamente
    imports: [
        //Siver para utilizar los if else for de angular
        CommonModule
    ]
})

export class HeroesModule{

}
