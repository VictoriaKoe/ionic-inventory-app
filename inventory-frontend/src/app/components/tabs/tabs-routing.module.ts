import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main',
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
        loadChildren: () => import('../../pages/item-view/item-view.module').then( m => m.ItemViewPageModule)
      },

      {
        path: 'categories',
        loadChildren: () => import('../../pages/category/category.module').then( m => m.CategoryPageModule)
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: 'home',
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
