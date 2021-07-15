import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AcumuladorComponent } from './contador/acumulador.component';

@NgModule({
    //componentes que contendra el modulo
    declarations: [
        AcumuladorComponent
    ],
    //seran privados o publicos
    exports: [
        AcumuladorComponent
    ],
    //Importar modulos necesarios
    imports: [
        CommonModule
    ]
})

export class ContadorModule{

}