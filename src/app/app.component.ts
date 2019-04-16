import {Component, QueryList, ViewChildren} from '@angular/core';
import {AppService} from "./app.service";
import {Country} from "./country.model";
import {compare, NgbdSortableHeaderDirective, SortEvent} from "./ngbd-sortable-header.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
