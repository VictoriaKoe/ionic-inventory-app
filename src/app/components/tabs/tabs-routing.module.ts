import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      // home page
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'add-item',
        loadChildren: () => import('../../pages/add-item/add-item.module').then( m => m.AddItemPageModule)
      },

      {
        path: 'items',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'categories',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
