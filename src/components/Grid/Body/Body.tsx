import React from 'react';

import Row from './Row';

import { IRow, IColumn } from '../types';

interface IProps {
  columnsKeys: string[];
  rows: IRow[];
  columnsByKeys: {
    [key: string]: IColumn;
  };
}

function Body({ columnsKeys, rows, columnsByKeys }: IProps) {
  return (
    <tbody>
      {rows.map((row: IRow, index: number) => (
        <Row columnsKeys={columnsKeys} row={row} key={index} columnsByKeys={columnsByKeys} />
      ))}
    </tbody>
  );
}

export default Body;
