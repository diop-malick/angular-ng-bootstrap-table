/*
 * @see https://github.com/jhipster/ng-jhipster/blob/master/src/directive/sort-by.directive.ts
 */
import {AfterContentInit, ContentChild, Directive, Host, HostListener, Input} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

import {JhiSortDirective} from './sort.directive';

import {faSort, faSortDown, faSortUp, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Styles} from '@fortawesome/fontawesome-svg-core';

@Directive({
    selector: '[jhiSortBy]'
})
export class JhiSortByDirective implements AfterContentInit {

    @Input() jhiSortBy: string;
    @ContentChild(FaIconComponent) iconComponent: FaIconComponent;

    sortIcon: IconDefinition;
    sortAscIcon: IconDefinition;
    sortDescIcon: IconDefinition;

    constructor(@Host() private jhiSort: JhiSortDirective) {
        this.jhiSort = jhiSort;
        this.sortIcon = faSort;
        this.sortAscIcon = faSortUp;
        this.sortDescIcon = faSortDown;
    }

    ngAfterContentInit(): void {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score' && this.jhiSort.predicate === this.jhiSortBy) {
            this.updateIconDefinition(this.iconComponent, this.jhiSort.ascending ? this.sortDescIcon : this.sortAscIcon, {});
            this.jhiSort.activeIconComponent = this.iconComponent;
        }
    }

    @HostListener('click')
    onClick() {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score') {
            console.log('jhiSort.activeIconComponent = ' + this.jhiSort.activeIconComponent);
            console.log('this.sortIcon = ' + this.sortIcon.iconName);
            console.log('HostListener onClick = ' + this.jhiSortBy);
            this.jhiSort.sort(this.jhiSortBy);
            this.updateIconDefinition(this.jhiSort.activeIconComponent, this.sortIcon, {});
            this.updateIconDefinition(this.iconComponent, this.jhiSort.ascending ? this.sortDescIcon : this.sortAscIcon, {'color': 'red'});
            this.jhiSort.activeIconComponent = this.iconComponent;
        }
    }

    private updateIconDefinition(iconComponent: FaIconComponent, icon: IconDefinition, styles: Styles) {
        if (iconComponent) {
            console.log('================ ');
            console.log('updateIconDefinition() icon = ' + icon.iconName);
            console.log('updateIconDefinition() iconProp = ' + iconComponent.iconProp);
            iconComponent.iconProp = icon;
            // iconComponent.classes = ['my-icon-class'];
            // let styles: Styles = {'stroke': 'red', 'color': 'red'};;
            // styles = {'stroke': 'red', 'color': 'red'};
            iconComponent.styles = styles;
            iconComponent.ngOnChanges({});
        }
    }
}
