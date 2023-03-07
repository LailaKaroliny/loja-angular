import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new  Subject<boolean>();

  constructor() { }


  login(usuario:string, senha:string):void{
    if(usuário=="aluno" && senha == "1234"){
      localStorage.setItem('token', 'qwer1234');
      this.monstraMenu.next(false);
    }else{
      this.monstraMenu.next(true);
    }
  }

  setMostraMenu(valor: boolean){
    this.mostraMenu.next(valor);
  }

  getMostraMenu(){
    return this.mostraMenu.asObservable();
  }
}
