import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user:string ='';
  mail:string ='';
  pass1:string ='';
  pass2:string='';
 
  password1:boolean = true;
  password2:boolean = true;
  mensaje:string = '';
 
  constructor(private signIn: SigninService) { }
 
  ngOnInit() {
  }
 
 
  async signinAuth(){
    if(!this.signIn.userChecker(this.user)){
      console.log('El usuario ya existe');
      return;
    }
    if(!this.signIn.passChecker(this.pass1, this.pass2)){
      return;
    }
    if(!this.signIn.mailCheck(this.mail)){
      return;
    }
    if(!this.signIn.registroAuth(this.user, this.mail, this.pass1)){
 
    }
  }
  async registro(){
    const respuesta =await this.signIn.registroAuth(this.user, this.mail, this.pass1);
  }
  togglePass(t:string){}
}