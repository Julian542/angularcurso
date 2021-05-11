import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {


  //Variables
  miVariable : string;

  constructor() { 
    this.miVariable = 'Hola Mundo!'
  }

  ngOnInit(): void {
  }
  
  miMetodo(){
    if(this.miVariable == 'Chau Mundo'){
      this.miVariable = 'Hola Mundo!';
    } else if(this.miVariable == 'Hola Mundo!'){
      this.miVariable = 'Chau Mundo';
    }
  }
}
