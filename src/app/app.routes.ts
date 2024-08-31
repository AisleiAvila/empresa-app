import { Routes } from '@angular/router';
import { UnidadesFederativasComponent } from './component/unidades-federativas/unidades-federativas.component';

export const routes: Routes = [
  { 
    path: 'unidades-federativas', component: UnidadesFederativasComponent 
},
  // outras rotas aqui...
];

// export const appRoutes: Route[] = [
//     {
//       path: 'unidades-federativas',
//       loadChildren: () =>
//         import('modules/products').then((m) => m.ProductsModule),
//     },
//   ];