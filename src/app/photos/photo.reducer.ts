import { createReducer, on } from '@ngrx/store';
import { IPhoto } from './photo.model';
import * as PhotoPageAction from './photo-page.action';
import produce from 'immer';

export interface PhotoState {
    photos: IPhoto[];
    currentPhoto: IPhoto | null;
    showPhoto: boolean;
}

const initialState: PhotoState = {
    photos: [],
    currentPhoto: null,
    showPhoto: false,
};

export const photoReducer = createReducer(
    initialState,
    on(PhotoPageAction.photos, (state: PhotoState, action) => {
        return produce(state, (draftState): void => {
            draftState.photos = action.photos;
        });
    }),
    on(PhotoPageAction.currentPhoto, (state: PhotoState, action) => {
        return produce(state, (draftState): void => {
            draftState.currentPhoto = action.currentPhoto;
        });
    }),
    on(PhotoPageAction.togglePhoto, (state: PhotoState) => {
        return produce(state, (draftState): void => {
            draftState.showPhoto = !draftState.showPhoto;
        });
    })
);
