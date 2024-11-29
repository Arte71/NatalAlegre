import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-doacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doacao.component.html',
  styleUrl: './doacao.component.css'
})
export class DoacaoComponent implements OnInit{
  valor = 0;
  contatoSalvo: any[] = []; 
  contatoObj: any = {
   nome: '', 
   email: '',
   mens: ''
  };
 

  salvarContato(){
  //Se nenhum dos campos estiverem vazio
  if (this.contatoObj.nome != '' && this.contatoObj.email != '' && this.contatoObj.mens != ''){
  this.contatoSalvo.push(this.contatoObj); 
  localStorage.setItem('contatoSalvo',JSON.stringify(this.contatoSalvo));
  this.contatoObj = {
  nome: '', 
  email: '',
  mens: ''
 }; 
 let salvo = localStorage.getItem('contatoSalvo');
 //Ele mostra todas as informações salvas na mesma sessão
 alert("As suas informações foram salvas e enviadas!" + salvo)
  }}
  
  //Devido o ngOnInIt ser vazio, nenhuma das informações são salvas de forma permanente
  constructor() {}
  ngOnInit(): void {

  }
}
