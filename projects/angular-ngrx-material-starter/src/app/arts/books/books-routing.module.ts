import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CollectionPageComponent,
  FindBookPageComponent,
  ViewBookPageComponent
} from './containers';
import { BookExistsGuard } from './guards';

export const routes: Routes = [
  {
    path: 'art/:id',
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard],
    data: { title: 'Book details' }
  },
  {
    path: 'coll',
    component: CollectionPageComponent,
    data: { title: 'Collection' }
  },
  {
    path: 'find',
    component: FindBookPageComponent,
    data: { title: 'Find book' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
