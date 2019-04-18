import {Pipe, PipeTransform} from '@angular/core';

/*
 * Sorting the givens values
 *
 * Usage:
 *   values | orderBy:orderProp:reverse
 * Declare reverse to component.ts file
 * @see https://github.com/jhipster/jhipster-sample-app/blob/1cf62bc24fdb5f1a64bd87305aca36f73740e743/src/main/webapp/app/admin/logs/logs.component.html
 *
 * @see Origin file : https://github.com/jhipster/ng-jhipster/blob/master/src/pipe/order-by.pipe.ts
*/
@Pipe({name: 'orderBy'})
export class JhiOrderByPipe implements PipeTransform {

    /**
     * @param values | Data list to sort
     * @param predicate | column
     * @param reverse | direction
     */
    transform(values: any[], predicate = '', reverse = false): any {
        if (predicate === '') {
            return reverse ? values.sort().reverse() : values.sort();
        }
        return values.sort((a, b) => {
            const e1 = this.getNested(a, predicate);
            const e2 = this.getNested(b, predicate);
            if (e1 < e2) {
                return reverse ? 1 : -1;
            } else if (e2 < e1) {
                return reverse ? -1 : 1;
            }
            return 0;
        });
    }

    /**
     * Get object nested property value for nested sort
     * @see http://blog.nicohaemhouts.com/2015/08/03/accessing-nested-javascript-objects-with-string-key/
     */
    getNested(theObject, path, separator = '.') {
        try {
            return path
                .replace('[', separator).replace(']', '')
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
