import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private usuario!: string;
  senha!: string;

  constructor(private _loginService: LoginService,private _router:Router);

  fazerLogin(){
    this._loginService.login(this.usuario,this.senha);
    this._router.navigate(['/restiro/lista']);
    this._loginService.setMostraMenu(false);
  }
}
