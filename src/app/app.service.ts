import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Country} from "./country.model";
import {COUNTRIES} from "./country.mock";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }
}
