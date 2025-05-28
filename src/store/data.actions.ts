import { createAction, props } from '@ngrx/store';
import { DataInterface, DataResponse } from '../model/data.interface';

export const loadData = createAction('[Data] Load Data');

export const loadDataSuccess = createAction(
    '[Data] Load Data Success',
    props<{ data: any }>()
);

export const updateDataInStore = createAction(
    '[Data] Update Data In Store',
    props<{ params: any }>()
);

export const loadDataFailure = createAction(
    '[Data] Load Data Failure',
    props<{ error: string }>()
);

export const loadDataWithParams = createAction(
    '[Data] Load Data With Params',
    props<{ params: any }>()
);
