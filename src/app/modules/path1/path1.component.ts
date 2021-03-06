import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as testActions from '../../store';

@Component({
    selector: 'app-path1',
    templateUrl: './path1.component.html',
    styleUrls: ['./path1.component.scss']
})
export class Path1Component implements OnInit {

    data$: Observable<any> = this.store.pipe(select(testActions.getTestData));
    moredata$: Observable<any> = this.store.pipe(select(testActions.getMoreTestData));

    constructor(
        private store: Store<any>
    ) {
    }


    ngOnInit() {
        this.store.dispatch(testActions.loadMoreData());
    }

    again() {
        this.store.dispatch(testActions.loadData());
    }

}
