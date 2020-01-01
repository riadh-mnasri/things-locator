import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListThingsComponent} from './list-things/list-things.component';
import {CreateThingComponent} from './create-thing/create-thing.component';
import {ThingDetailsComponent} from './thing-details/thing-details.components';

const routes: Routes = [
  {path: '', redirectTo: 'thing', pathMatch: 'full'},
  {path: 'things', component: ListThingsComponent},
  {path: 'add', component: CreateThingComponent},
  { path: 'details/:id', component: ThingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
