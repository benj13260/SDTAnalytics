import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nfts',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'stake-dao',
    loadChildren: () =>
      import('./stake-dao/stake-dao.module').then((m) => m.StakeDaoModule)
  },
  {
    path: 'nfts'
    //    loadChildren: () =>
    //     import('./arts/certif/certifs.module').then((m) => m.CertifsModule)
  },
  {
    path: 'galleries'
    //    loadChildren: () =>
    //      import('./arts/certif/certifs.module').then((m) => m.CertifsModule)
  },
  {
    path: 'create'
    //    loadChildren: () =>
    //      import('./arts/certif/certifs.module').then((m) => m.CertifsModule)
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./arts/books/books.module').then((m) => m.BooksModule)
  },

  /*
  {
    path: 'feature-list',
    loadChildren: () =>
      import('./features/feature-list/feature-list.module').then(
        (m) => m.FeatureListModule
      )
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      )
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./features/examples/examples.module').then(
        (m) => m.ExamplesModule
      )
  },
  */
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
