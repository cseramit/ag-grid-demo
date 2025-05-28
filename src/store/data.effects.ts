import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import * as DataActions from './data.actions';

@Injectable()
export class DataEffects {
    private actions$ = inject(Actions);
    private dataService = inject(DataService);

    loadData$ = createEffect(() => 
        this.actions$.pipe(
            ofType(DataActions.loadData),
            switchMap(() => 
                this.dataService.fetchData().pipe(
                    map((data) => DataActions.loadDataSuccess({ data })),
                    catchError((error) => of(DataActions.loadDataFailure({ error: error.message })))
                )
            )
        )
    );

    loadDataWithParams$ = createEffect(() => 
        this.actions$.pipe(
            ofType(DataActions.loadDataWithParams),
            switchMap((action) => 
                this.dataService.fetchDataWithParams(action.params).pipe(
                    map((response) => { console.log(response); return DataActions.loadDataSuccess({ data: response })}),
                    catchError((error) => of(DataActions.loadDataFailure({ error: error.message })))
                )
            )
        )
    );
}
