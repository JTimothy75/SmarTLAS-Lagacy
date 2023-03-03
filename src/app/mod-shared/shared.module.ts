import { NgModule } from "@angular/core";
import { Error404Component } from './errors/404.component';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [
        CommonModule
    ],

    declarations: [
        Error404Component,
    ],

    providers: [],

    exports: [ 
        Error404Component,
        CommonModule
     ]
    
})

export class ShareModule {
    
}