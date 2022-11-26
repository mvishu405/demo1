import { createAction, props } from '@ngrx/store';
import { IPhoto } from './photo.model';

export const photos = createAction(
    `[Photo Page] load all phots`,
    props<{ photos: IPhoto[] }>()
);

export const currentPhoto = createAction(
    `[Photo Page] set current photo`,
    props<{ currentPhoto: IPhoto }>()
);

export const togglePhoto = createAction(`[Photo Page] toggle photo`);
