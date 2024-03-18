import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conwaygame',
  templateUrl: './conwaygame.page.html',
  styleUrls: ['./conwaygame.page.scss'],
})
export class ConwaygamePage implements OnInit {
  alto:number = 50;
  largo:number = 50;
  ancho: number = 50;
  tablero: any[][] = [];
  siguienteTablero:any[][]= [];

  constructor() { }

  ngOnInit() {
    this.poblar();
    this.interacion();
  }

  contarVecinos(){
    this.siguienteTablero = this.copiarArreglo(this.tablero);
    for(let i = 0; i < this.alto ; i++){
      for(let j = 0; j < this.largo ; j++){
        let vecinos = this.contador(i,j);
        if(this.tablero[i][j] == 0 && vecinos == 3){
          this.siguienteTablero[i][j] = 1;
        }else if(this.tablero[i][j] ==1 &&
          (vecinos < 2 || vecinos > 3) ){
            this.siguienteTablero[i][j] = 0;
          }
      }
    }
  }

  contador(a:number, b:number):number{
    let vecinos = 0;
    for(let i = -1 ; i < 2 ; i++){
      for(let j = -1 ; j < 2 ; j++){
        let x = (a + i + this.alto) % this.alto;
        let y = (b + j + this.largo) % this.largo;
        vecinos += this.tablero[x][y];
      }
    }
    vecinos -= this.tablero[a][b];
    return vecinos;
  }

  iterar(){
    setInterval( ()=>{
      this.poblar();
    },80);
  }

  copiarArreglo(arregloOriginal:number[][]):number[][]{
    let copiar: number[][]=[];
    for(let i = 0; i <arregloOriginal.length; i++){
      copiar[1]=[];
      for(let j = 0; j < arregloOriginal[i].length;j++){
        copiar[i][j]=arregloOriginal[i][j];
      }
    }
    return copiar;
  }

  copiarTablero(arregloOriginal:number[][]):number[][]{
    let copia:number[][] = [];
    for(let i = 0 ; i < this.alto ; i++){
      copia[i] = [];
      for(let j = 0; j < this.largo ; j++){
        copia[i][j] = arregloOriginal[i][j];
      }
    }
    return copia;
  }


  poblar(){
    for(let i=0; i<this.alto; i++){
      this.tablero[i]=[];
      for(let j=0;j<this.largo; j++){
        this.tablero[i][j]= Math.floor(Math.random()*2);
      }
    }
    console.log(this.tablero);
  }

  actualizarEstado(){
    this.tablero = this.copiarArreglo  (this.siguienteTablero);
  }

  interacion(){
    setInterval(()=>{
      this.contarVecinos();
      this.actualizarEstado();
    },150);
  }

}
