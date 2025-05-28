import { DataInterface } from '../model/data.interface';

export interface DataState {
    items: DataInterface[];
    loading: boolean;
    error: string | null;
}

export const initialState: DataState = {
    items: [],
    loading: false,
    error: null
};
