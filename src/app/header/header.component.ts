//Necessário para utilizar o NgIf
import { CommonModule } from '@angular/common'; 
//OninIt necessário para que possa salvar as conta cadastradas
import { Component, OnInit, } from '@angular/core'; 
import { RouterLink, RouterOutlet } from '@angular/router';
//Necessário para verificar se você está conectado com a sua conta ou não
import { AuthService } from '../auth.service'; 
//Necessário para o NgModule funcionar
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(public authService: AuthService) {}
  //A classe atual do login e cadastro, quando inicia a página, eles se fecham automaticamente
  statusClassLogin = 'fechado'; 
  statusClassCadastro = 'fechado';

  abrirLogin(){
    //Quando clicado, abre-se o container do login
    this.statusClassLogin = 'abertoLogin'; 
    //Caso o cadastro esteja aberto, ao pressionar, ele fecha automaticamente
    this.statusClassCadastro = 'fechado';
  }

  fecharLogin(){
  this.statusClassLogin = 'fechado';
 }

  abrirCadastro(){
    this.statusClassCadastro = 'abertoCadastro';
    this.statusClassLogin = 'fechado';

  }

  fecharCadastro(){
    this.statusClassCadastro = 'fechado';

  }
 
  //Array onde são enviadas as informações de cadastro para o sistema
 cadastrarUsers: any[] = []; 
 cadastrarObj: any = {
  user: '', 
  senha: ''
 };
 acessarObj: any = {
  user: '',
  senha: ''
 };


 //Armazenar as informações fornecidas por cadastrarUsers, elas são salvas de forma permanente
 ngOnInit(): void { 
  const localData = localStorage.getItem('cadastrarUsers');
  if (localData != null) {
    this.cadastrarUsers = JSON.parse(localData); 
  }
 }

//Envia informações para cadastrarUsers na forma de uma string
 onCadastrar(){
  this.cadastrarUsers.push(this.cadastrarObj); 
  localStorage.setItem('cadastrarUsers',JSON.stringify(this.cadastrarUsers));
  this.cadastrarObj = {
  user: '', 
  senha: ''
 };
 alert('Usuário cadastrado com sucesso!')
 }

 onLogin(){
  const userExiste =  this.cadastrarUsers.find(m => m.user == this.acessarObj.user && m.senha == this.acessarObj.senha);
  if (userExiste != undefined) {
    alert('Usuário logado com sucesso')
    this.statusClassLogin = 'fechado'
    this.authService.session = { 
      user: this.acessarObj.user,
      senha: this.acessarObj.senha
  } 
  } else {
    alert('Acesso inválido. Tente novamente ou cadastre-se agora!')
  }
  /*Envia ao servido que você está na sessão,
  * sem isso, o servidor irá automaticamente lhe tirar do sistema
  */
  localStorage.setItem('onLogin', this.authService.session(true)); 
  

 }
}
