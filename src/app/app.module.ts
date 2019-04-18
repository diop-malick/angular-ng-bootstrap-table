import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableOneComponent} from './table-one/table-one.component';
import {TableTwoComponent} from './table-two/table-two.component';
import {AppService} from "./app.service";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSort, faSearch } from '@fortawesome/free-solid-svg-icons';
import {JhiSortByDirective} from "./sort/sort-by.directive";
import {JhiSortDirective} from "./sort/sort.directive";
import {JhiOrderByPipe} from "./sort/order-by.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TableOneComponent,
    TableTwoComponent,
    JhiSortByDirective,
    JhiSortDirective,
    JhiOrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AppService, JhiOrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faSort);
    library.add(faSearch);
  }
}
