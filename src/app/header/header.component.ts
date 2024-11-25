import { Component } from '@angular/core';
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
 cadastrarObj:any = {
  user: '', 
  senha: ''
 };
 acessarObj any = {
  user: '',
  senha: ''
 };

 onCadastrar(){
  
 }

 onLogin(){

 }
}
