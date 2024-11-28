import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  statusClass = 'fechado';

  abrir(){
    this.statusClass = 'aberto'
  }

  fechar(){
  this.statusClass = 'fechado';

 }
 cadastrarUsers: any[] = [];
 cadastrarObj: any = {
  user: '', 
  senha: ''
 };
 acessarObj: any = {
  user: '',
  senha: ''
 };
 
 ngOnInIt(): void {
  const localData = localStorage.getItem('cadastrarUsers');
  if (localData != null) {
    this.cadastrarUsers = JSON.parse(localData);
  }
 }

 onCadastrar(){
  this.cadastrarUsers.push(this.cadastrarObj);
  localStorage.setItem('cadastrarUsers',JSON.stringify(this.cadastrarUsers));
  this.cadastrarObj = {
  user: '', 
  senha: ''
 };
 }

 onLogin(){
  const userExiste =  this.cadastrarUsers.find(m => m.user == this.acessarObj.user && m.senha == this.acessarObj.senha);
  if (userExiste != undefined) {
    alert('Usuário logado com sucesso')
  } else {
    alert('Acesso inválido. Tente novamente ou cadastre-se agora!')
  }

 }
}
