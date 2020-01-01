import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListThingsComponent} from './list-things/list-things.component';
import {CreateThingComponent} from './create-thing/create-thing.component';

const routes: Routes = [
  {path: '', redirectTo: 'thing', pathMatch: 'full'},
  {path: 'things', component: ListThingsComponent},
  {path: 'add', component: CreateThingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
