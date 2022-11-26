import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import * as counterPageAction from './counter.action';
import produce from 'immer';

export const counterReducer = createReducer(
    initialState,
    on(counterPageAction.increment, (state) =>
        produce(state, (draftState) => {
            draftState.counter += 1;
        })
    ),
    on(counterPageAction.decrement, (state) =>
        produce(state, (draftState) => {
            draftState.counter -= 1;
        })
    ),
    on(counterPageAction.reset, (state) =>
        produce(state, (draftState) => {
            draftState.counter = 0;
        })
    )
);
