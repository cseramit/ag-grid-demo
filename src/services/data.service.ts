import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInterface, DataResponse } from '../model/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://run.mocky.io/v3/56fbab21-9ac9-434e-adc3-1c9f10d1c000'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  /**
   * Fetch data from the API
   * @returns Observable of the data
   */
  fetchData(): Observable<DataResponse> {
    return this.http.get<DataResponse>(this.apiUrl);
  }

  /**
   * Fetch data with parameters
   * @param params Query parameters
   * @returns Observable of the filtered data
   */
  fetchDataWithParams(params: any): Observable<DataInterface[]> {
    return this.http.get<DataInterface[]>(this.apiUrl, { params });
  }
}
