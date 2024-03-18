import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./infinitescroll/infinitescroll.module').then( m => m.InfinitescrollPageModule)
  },
  {
    path: 'qrgenerator',
    loadChildren: () => import('./qrgenerator/qrgenerator.module').then( m => m.QrgeneratorPageModule)
  },
  {
    path: 'culturageneral',
    loadChildren: () => import('./culturageneral/culturageneral.module').then( m => m.CulturageneralPageModule)
  },
  {
    path: 'conwaygame',
    loadChildren: () => import('./conwaygame/conwaygame.module').then( m => m.ConwaygamePageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'agenda-pokemon',
    loadChildren: () => import('./agenda-pokemon/agenda-pokemon.module').then( m => m.AgendaPokemonPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
