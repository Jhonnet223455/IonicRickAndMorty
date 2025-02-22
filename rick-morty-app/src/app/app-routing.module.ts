import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'episode-detail',
    loadChildren: () => import('./pages/episode-detail/episode-detail.module').then( m => m.EpisodeDetailPageModule)
  },
  { 
    path: '', redirectTo: 'episodes', pathMatch: 'full'
  },
  {
    path: 'episodes', loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesPageModule) 
  },
  {
     path: 'episode-detail', loadChildren: () => import('./pages/episode-detail/episode-detail.module').then(m => m.EpisodeDetailPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
