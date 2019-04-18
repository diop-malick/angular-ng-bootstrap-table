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

  /**
   * @see http://blog.nicohaemhouts.com/2015/08/03/accessing-nested-javascript-objects-with-string-key/
   * @param theObject
   * @param path
   * @param separator
   */
  getNested (theObject, path, separator = '.') {
    try {
      return path
          .replace('[', separator).replace(']','')
          .split(separator)
          .reduce((obj, property) => {
                return obj[property];
              }, theObject
          );
    } catch (err) {
      return undefined;
    }
  }
}
