import { Component, OnInit } from '@angular/core';
import { State, StateObservable, Store } from '@ngrx/store';
import { filter, map, Observable, tap } from 'rxjs';
import * as PhotoPageAction from './photo-page.action';
import { IPhoto } from './photo.model';
import { PhotoState } from './photo.reducer';
import { PhotoService } from './photo.service';
import { MatDialog } from '@angular/material/dialog';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
    photosObs$ = this._store.select<any>('photoReducer');

    photos$ = this.photosObs$.pipe(map((x) => x.photos));

    togglePhoto$ = this.photosObs$.pipe(map((x) => x.showPhoto));

    constructor(
        private _photoService: PhotoService,
        private _store: Store<{ photoReducer: State<any> }>,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this._photoService.getAllPhots().subscribe((next) => {
            this._store.dispatch(
                PhotoPageAction.photos({ photos: next.slice(0, 10) })
            );
        });
        this.photos$.subscribe(console.log);
    }

    showThubnail(): void {
        this._store.dispatch(PhotoPageAction.togglePhoto());
    }

    openPhoto(photo: IPhoto) {
        const dialogRef = this.dialog.open(CounterComponent);
    }
}
