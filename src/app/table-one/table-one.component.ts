import {Component, OnInit} from '@angular/core';
import {Country} from "../country.model";
import {AppService} from "../app.service";
import {JhiOrderByPipe} from "../sort/order-by.pipe";

@Component({
    selector: 'app-table-one',
    templateUrl: './table-one.component.html',
    styleUrls: ['./table-one.component.scss']
})
export class TableOneComponent implements OnInit {

    title = 'COUNTRIES';

    countries: Country[];

    predicate: any;
    reverse: any;

    constructor(private appService: AppService, private orderByPipe: JhiOrderByPipe) {
        this.countries = [];
        this.predicate = 'id';
        this.reverse = true;
    }

    ngOnInit() {
        this.getCountries();
    }

    getCountries(): void {
        this.appService.getCountries()
            .subscribe(countries => this.countries = countries);
    }

    onSort() {
        this.countries = this.orderByPipe.transform(this.countries, this.predicate, this.reverse);
    }

}
