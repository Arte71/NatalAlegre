import { Routes } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { EspacoKidsComponent } from './espaco-kids/espaco-kids.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';


export const routeConfig: Routes = [
    {path: '', component: NoticiaComponent, title: "Notícias"},
    {path: 'doacao', component: DoacaoComponent, title:"Doações"},
    {path: 'espaco-kids', component: EspacoKidsComponent, title:"Espaço Kids"},
    {path: 'sobre', component: SobreComponent, title:"Sobre"},
    {path: 'contato', component: ContatoComponent, title:"Sobre"}
    
    
];

export default routeConfig;
