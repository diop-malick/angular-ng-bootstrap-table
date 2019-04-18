import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Country} from "../country.model";
import {compare, NgbdSortableHeaderDirective, SortEvent} from "../ngbd-sortable-header.directive";
import {AppService} from "../app.service";
import {User} from "../user.model";
import {JhiOrderByPipe} from "../sort/order-by.pipe";

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})
export class TableTwoComponent implements OnInit {
  title = 'USERS with jhipster sort';

  users: User[];

  predicate: any;
  reverse: any;

  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  constructor(private appService: AppService, private orderByPipe: JhiOrderByPipe) {
    this.users = [];
    this.predicate = 'id';
    this.reverse = true;
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.appService.getUsers()
        .subscribe(users => this.users = users);
  }

  reset() {
    console.log('================ callback reset');
    console.log('this.predicate | column = ' + this.predicate);
    console.log('this.reverse | direction =' + this.reverse);

    this.users = this.orderByPipe.transform(this.users,this.predicate,this.reverse);
  }

}
