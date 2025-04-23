import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowId, row: RowElement): RowID;
