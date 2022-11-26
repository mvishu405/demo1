import { Component, OnInit } from '@angular/core';
import { StateObservable, Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.action';
import { State } from './store/counter.state';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
    counter$: StateObservable = this._store.select('counter');

    constructor(private _store: Store<{ counter: State }>) {}

    ngOnInit(): void {}

    increment() {
        this._store.dispatch(increment());
    }

    decrement() {
        this._store.dispatch(decrement());
    }

    reset() {
        this._store.dispatch(reset());
    }
}
