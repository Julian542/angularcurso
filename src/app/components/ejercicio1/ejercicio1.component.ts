import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  // Este ejercicio consiste en hacer un cuadro con una suma 
  
  // Variables
  variable1 : number;
  variable2 : number;
  resultado : number;

  constructor() {
    this.resultado = 0;
    this.variable2 = 1890;
    this.variable1 = 765;
   }

  ngOnInit(): void {
  }

  suma() : number{
    this.resultado = this.variable1 + this.variable2;
    return this.resultado;
  }

}
