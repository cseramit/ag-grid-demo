import { createReducer, on } from '@ngrx/store';
import { DataState, initialState } from './data.state';
import * as DataActions from './data.actions';

// Initial state with mock data
const mockInitialState: DataState = {
    ...initialState
};

export const dataReducer = createReducer(
    mockInitialState,
    on(DataActions.loadData, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(DataActions.loadDataSuccess, (state, action) => ({
        ...state,
        loading: false,
        items: action.data.data
    })),
    on(DataActions.loadDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(DataActions.loadDataWithParams, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(DataActions.updateDataInStore, (state, action) => ({
        ...state,
        loading: false,
        items: action.params
    })),
);
