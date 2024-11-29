import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-espaco-kids',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './espaco-kids.component.html',
  styleUrl: './espaco-kids.component.css'
})
export class EspacoKidsComponent {
  cartinhaSalva: any[] = []; 
  cartinhaObj: any = {
   email: '',
   mens: ''
  };
 

  enviarCartinha(){
  if (this.cartinhaObj.email != '' &&  this.cartinhaObj.mens != ''){
  this.cartinhaSalva.push(this.cartinhaObj); 
  localStorage.setItem('cartinhaSalva',JSON.stringify(this.cartinhaSalva));
  this.cartinhaObj = {
  email: '',
  mens: ''
 }; 
 let cartinha = localStorage.getItem('cartinhaSalva');
 alert("Sua cartinha foi enviada com sucesso!\nPapai Noel vai ler ela daqui a pouco.\n" + cartinha)

}}}
