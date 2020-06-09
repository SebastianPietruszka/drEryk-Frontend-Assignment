import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';

import { IRow, IColumn } from './types';

interface IProps {
  columns: IColumn[];
  rows: IRow[];
}

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
`;

const compare = (a: IRow, b: IRow, key: string) => {
  const bandA = a[key].toUpperCase();
  const bandB = b[key].toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
};

function Grid({ columns, rows }: IProps) {
  const [sortingColumn, setSortingColumn] = useState('');
  const [sortedRows, setSortedRows] = useState(rows);
  const columnsByKeys = useMemo(
    () =>
      columns.reduce(
        (acc: object, column: IColumn) => ({ ...acc, [column.key]: { ...column } }),
        {}
      ),
    [columns]
  );

  const sortColumns = (columnKey: string) => {
    if (columnKey === sortingColumn) {
      setSortedRows([...sortedRows].reverse());
      return;
    }

    setSortingColumn(columnKey);
    setSortedRows(sortedRows.sort((a: IRow, b: IRow) => compare(a, b, columnKey)));
  };

  const columnsKeys = columns.map(({ key }: IColumn) => key);

  return (
    <Table>
      <Header columns={columns} sortColumns={sortColumns} />
      <Body columnsByKeys={columnsByKeys} columnsKeys={columnsKeys} rows={sortedRows} />
    </Table>
  );
}

export default Grid;
