import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Newuser } from 'src/app/models/newuser';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados() {
    console.log(this.userModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "by ", "insert ", "exec ", "\"", "\'", "\--", "\#", "\*"]

    listaPalavras.forEach(palavra => {
      if(this.userModel.email?.toLowerCase().includes(palavra)){
        this.mensagem = "Dados inválidos." + palavra

        return;
      }
      
    });

    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("response:", response)
      console.log("O status code é: ", response.status)

      this.mensagem = "Bem-vindo, " + response.body.user.firstname
      console.log(this.mensagem)
    }, (responseErro) => {
      console.log("responseErro", responseErro)
      this.mensagem = responseErro.error
    })
  }

  newUserModel = new Newuser()

  cadastrarDados() {
    console.log(this.newUserModel)

    this.registerService.register(this.newUserModel).subscribe((response) => {
      // console.log("response", response)
    }, (erro) => {
      console.log(erro)
    })
  }
}
