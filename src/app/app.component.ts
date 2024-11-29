import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { SobreComponent } from "./sobre/sobre.component";
import { EspacoKidsComponent } from "./espaco-kids/espaco-kids.component";
import { ContatoComponent } from "./contato/contato.component";
import { DoacaoComponent } from "./doacao/doacao.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, CommonModule, RouterLink, RouterOutlet, SobreComponent, EspacoKidsComponent, ContatoComponent, DoacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NatalAlegre';
}
