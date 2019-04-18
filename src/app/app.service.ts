import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Country} from "./country.model";
import {COUNTRIES} from "./country.mock";
import {of} from "rxjs/internal/observable/of";
import {USERS} from "./user.mock";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
