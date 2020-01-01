import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateThingComponent} from './create-thing/create-thing.component';
import {ListThingsComponent} from './list-things/list-things.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ThingDetailsComponent} from './thing-details/thing-details.components';

@NgModule({
  declarations: [
    AppComponent,
    CreateThingComponent,
    ListThingsComponent,
    ThingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
