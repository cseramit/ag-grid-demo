import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadData, updateDataInStore } from '../store/data.actions';
import { DataState } from '../store/data.state';
import { DataInterface } from '../model/data.interface';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public rowData: DataInterface[] = [];

  constructor(private store: Store<{ data: DataState }>) {
   this.store.select('data').subscribe((state) => {
    this.rowData = JSON.parse(JSON.stringify(state.items));
   });
  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
  }

  handleUserEvent(event: any) {
    this.store.dispatch(updateDataInStore({ params: event.data }))

  }


}
