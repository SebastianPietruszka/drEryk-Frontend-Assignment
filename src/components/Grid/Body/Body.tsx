import React from 'react';

import Row from './Row';

import { IRow, IColumn } from '../types';

interface IProps {
  columnsKeys: string[];
  rows: IRow[];
  columnsByKeys: {
    [key: string]: IColumn;
  };
  animation: boolean;
}

function Body({ columnsKeys, rows, columnsByKeys, animation }: IProps) {
  return (
    <tbody>
      {rows.map((row: IRow, index: number) => (
        <Row
          columnsKeys={columnsKeys}
          row={row}
          key={index}
          columnsByKeys={columnsByKeys}
          animation={animation}
        />
      ))}
    </tbody>
  );
}

export default Body;
