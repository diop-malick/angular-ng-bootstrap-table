import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Country} from "../country.model";
import {compare, NgbdSortableHeaderDirective, SortEvent} from "../ngbd-sortable-header.directive";
import {AppService} from "../app.service";

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss']
})
export class TableOneComponent implements OnInit {

  title = 'angular-ng-boostrap-table';

  countries: Country[];

  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.appService.getCountries()
        .subscribe(countries => this.countries = countries);
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.countries = this.countries;
    } else {
      this.countries = this.countries.sort((a, b) => {
        const res = compare(
            this.appService.getNested(a, column),
            this.appService.getNested(b, column)
        );
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
