import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';

//importar Componente
import { LoginstateComponent } from '../loginstate/loginstate.component';
import { StateloginService } from '../services/statelogin.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  togglePassword:boolean = false;

  user:string = '';
  pass:string = '';

  constructor(private loadingController:LoadingController, private toastController:ToastController, 
    //agregar componente
    private lsc: LoginstateComponent,
    private navController:NavController) { }

  ngOnInit() {
  }

//presentar pantalla de carga 
  async presentarLoading(){
    const carga = await this.loadingController.create({
      message:'por favor, espere...'
    });
    await carga.present();
  }  
  //cerrar pantalla de carga
  async dismissLoading(){
    await this.loadingController.dismiss();
  }

  mostrarPassword(){
    this.togglePassword = !this.togglePassword;
  }

  //guardar datos de login y logica
  async login(){
    /*let estado = this.lsc.login(this.user,this.pass);
    if (estado){
      this.navController.navigateRoot('inicio');
    }*/

    const result = await this.lsc.login(this.user, this.pass);
    if(result){

    }else{

    }
  }

  //mostrar datos en consola 
  mostarDatos(){
    console.log(this.user);
    console.log(this.pass);
  }

  //mostrar datos en TOAST
  //molde
  async mostrarToast(){
    const toast = await this.toastController.create({
      //parametros
      message: this.user + this.pass,  //string
      duration: 1500,  //ms
      position: 'top',  //domde se ubica 'top' 'middle' 'bottom'
    });
    //mostrar el toast
    toast.present();
  }

}


