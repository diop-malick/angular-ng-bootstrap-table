import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableOneComponent} from './table-one/table-one.component';
import {TableTwoComponent} from './table-two/table-two.component';
import {AppService} from "./app.service";
import {NgbdSortableHeaderDirective} from './ngbd-sortable-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableOneComponent,
    TableTwoComponent,
    NgbdSortableHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
