import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/login-auth-guard.guard';

const routes: Routes = [
  
  // redirect path
  {
    path: '',
    redirectTo: 'welcomepage',
    pathMatch: 'full' // tells the router how to match the URL.
  },

  // welcome page (load the app)
  {
    path: 'welcomepage',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },

  // splashscreen page
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },

  // login page
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // canActivate: [AuthGuard]
  },

  // register page
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

  // forget password
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },

  // user profile 
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    // canActivate: [AuthGuard]
  },

  // tabs
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.module').then( m => m.TabsPageModule),
    // canActivate: [AuthGuard]
  },

  // add item page
  {
    path: 'add-item',
    loadChildren: () => import('./pages/add-item/add-item.module').then( m => m.AddItemPageModule),
    // canActivate: [AuthGuard]
  },

  // terms-policy
  {
    path: 'terms-policy',
    loadChildren: () => import('./pages/terms-policy/terms-policy.module').then( m => m.TermsPolicyPageModule),
    // canActivate: [AuthGuard]
  },

  // settings 
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule),
    // canActivate: [AuthGuard]
  },

  // item details
  {
    path: 'item-details',
    loadChildren: () => import('./pages/item-details/item-details.module').then( m => m.ItemDetailsPageModule),
    // canActivate: [AuthGuard]
  },

  // category items
  {
    path: 'category-items',
    loadChildren: () => import('./pages/category-items/category-items.module').then( m => m.CategoryItemsPageModule),
    // canActivate: [AuthGuard]
  },

   // home page
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  // items view
  // {
  //   path: 'item-view',
  //   loadChildren: () => import('./pages/item-view/item-view.module').then( m => m.ItemViewPageModule)
  // },

  // category 
  // {
  //   path: 'category',
  //   loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  // },

  // page not found 404, wildcard router
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
