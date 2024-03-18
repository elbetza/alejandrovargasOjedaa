import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StateloginService {
  private isLoggedIn: boolean = false;

  constructor() { }

  async login(u:string, p:string){
    try{
      if( u == '' || p == ''){
        return false;
      }
      if(this.userChecker(u) && this.passChecker(p)){
        return false;
      }
      return this.authfirebase(u,p);
    }catch(e){
      console.log('Error inesperado', e);
      return false;
    }
  }

  userChecker(u:string){
    return /[a-zA-Z0-9_@.-]/.test(u);
  }

  passChecker(p:string){
    if(p.length <8 || /![a-zA-Z0-9]+[^-=/.,!@_]/.test(p)){
      return false;
    }
    return true;
  }

  setLoginState(u:any){
    this.isLoggedIn = !this,this.isLoggedIn;
  }

  async setLogOut(){
    localStorage.setItem('user', JSON.stringify(''));
    localStorage.setItem('level', JSON.stringify(''));
  }

  async setLocalData(uid:any){
    try{
      const userRef = firebase.database().ref(`users/${uid}`);
      userRef.once('value', snapshot=>{
        //logistica
        if(snapshot.exists()){
          const userData = snapshot.val();
          localStorage.setItem('user', JSON.stringify(userData.name));
          localStorage.setItem('level', JSON.stringify(userData.level));
        }
      });

    }catch(e){
      console.log(e);
    }
  }

  async authfirebase(u:string, p:string){
    try{
      const resultado = await firebase.auth().signInWithEmailAndPassword(u,p);
      if(resultado.user && resultado.user.emailVerified){
        const uid = resultado.user.uid;
        this.setLoginState(uid);
        return true;
      }else{
        console.log('Error: correo invitado o cuenta no verificada');
        return false;
      }
    } catch(e){
      console.log('Error inesperado, intentelo mas tarde');
      return false;
    }
  }
}
