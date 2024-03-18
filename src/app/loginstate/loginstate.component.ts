import { Component, Injectable, OnInit } from '@angular/core';

//import { Storage } from '@ionic/store-angular';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-loginstate',
  templateUrl: './loginstate.component.html',
  styleUrls: ['./loginstate.component.scss'],
})

export class LoginstateComponent  implements OnInit {


  constructor(/*private storage: Storage*/) { }

  ngOnInit() {}

  async authfirebase(user:string, pass:string){
    try{
      //const resultado = await
    } catch(e){}
  }

  login(u:string , p:string){

        if(u == '' || p == ''){
          console.log("Hay un campo vacio");
          return;
    }
    
    // logica de inicio de sesion

    //alamcenar datos
    localStorage.setItem('nombreuser',u);
    localStorage.setItem('level','1');
    return true;
  }

}
