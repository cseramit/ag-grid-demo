import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, TabToNextCellParams, GridOptions } from 'ag-grid-community';
import { DataInterface } from '../model/data.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [AgGridModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {

  @Input() rowData: DataInterface[] = []
  @Output() userEvent: EventEmitter<any> = new EventEmitter();

  private gridApi!: GridApi;
  public gridOptions: GridOptions = {
    context: this,
		columnMenu: 'legacy',
		// default column definition
    columnDefs: [
      { 
        field: 'value_1',
        type: ['numericColumn', 'entryColumn']
      },
      { 
        field: 'value_2',
        type: ['numericColumn', 'entryColumn']
      },
      { 
        field: 'value_3',
        type: ['numericColumn', 'entryColumn']
      },
      { 
        field: 'value_4',
        type: ['numericColumn', 'entryColumn']
      },
      { 
        field: 'value_5',
        type: ['numericColumn', 'entryColumn']
      }
    ],
		defaultColDef: {
			resizable: true,
			suppressHeaderMenuButton: true,
			suppressHeaderContextMenu: true,
			suppressMovable: true
		},
    columnTypes: {
			entryColumn: {
				editable: true
			}
		},
		suppressRowHoverHighlight: true,
		enableRangeSelection: true
	}


  onCellEditingStopped(params: any) {
      params.context.userEvent.emit({data: params.context.rowData})
  }

  onGridReady(params: any) {
    params.context.gridApi = params.api;
  }

  ngOnInit(): void {
    this.store.select('data').subscribe((state) => {
      this.rowData = state.items;
    });
  }

  constructor(private store: Store<any>) {
    this.tabToNextCell = this.tabToNextCell.bind(this)
  }

	tabToNextCell(parameters: TabToNextCellParams): any {
		setTimeout(() => {
			if (parameters.nextCellPosition !== null) {
				const rowIndex = parameters.nextCellPosition.rowIndex
				const colId = parameters.nextCellPosition.column.getColId()
				this.gridApi.startEditingCell({
					rowIndex: rowIndex,
					colKey: colId
				})
			}
		}, 100)
		return parameters.nextCellPosition || false
	}

}
