import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPhoto } from './photo.model';

@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    constructor(private _httpClient: HttpClient) {}

    getAllPhots(): Observable<IPhoto[]> {
        return this._httpClient.get<IPhoto[]>(
            `https://jsonplaceholder.typicode.com/photos`
        );
    }
}
