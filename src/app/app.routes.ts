import { Routes } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import { DoacaoComponent } from './doacao/doacao.component';


export const routeConfig: Routes = [
    {path: '', component: NoticiaComponent, title: "Notícias"},
    {path: 'doacao', component: DoacaoComponent, title:"Doações"}
    
];

export default routeConfig;
