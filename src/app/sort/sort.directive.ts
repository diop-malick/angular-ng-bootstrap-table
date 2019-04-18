/*
* @see https://github.com/jhipster/ng-jhipster/blob/master/src/directive/sort.directive.ts
 */
import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Directive({
    selector: '[jhiSort]'
})
export class JhiSortDirective {

    @Input() predicate: string;
    @Input() ascending: boolean;
    @Input() callback: Function;

    @Output() predicateChange: EventEmitter<any> = new EventEmitter();
    @Output() ascendingChange: EventEmitter<any> = new EventEmitter();

    activeIconComponent: FaIconComponent;

    constructor() {
    }

    sort(field: any) {
        console.log('JhiSortDirective.sort() = ' + field);
        this.ascending = field !== this.predicate ? true : !this.ascending;
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    }
}
