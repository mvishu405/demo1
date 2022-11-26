import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    StoreModule,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/store/counter.reducer';
import { photoReducer } from './photos/photo.reducer';
import { PhotosComponent } from './photos/photos.component';
import { IState } from './app.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const reducers: ActionReducerMap<IState> = {
    counter: counterReducer,
    photoReducer,
};

export function localStorageSyncReducer(
    reducer: ActionReducer<any>
): ActionReducer<any> {
    return localStorageSync({
        keys: ['counter', 'photoReducer'],
        rehydrate: true,
    })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    declarations: [AppComponent, CounterComponent, PhotosComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatSlideToggleModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
