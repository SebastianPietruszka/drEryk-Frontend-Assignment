import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

import { IColumn, IRow } from '../../types';

interface IProps {
  columnsKeys: string[];
  row: IRow;
  columnsByKeys: {
    [key: string]: IColumn;
  };
}

const StyledRow = styled.tr`
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

function Row({ columnsKeys, row, columnsByKeys }: IProps) {
  return (
    <StyledRow>
      {columnsKeys.map((key: string, index: number) => (
        <Cell
          key={key}
          cellValue={row[key]}
          frozen={index === columnsKeys.length - 1}
          width={columnsByKeys[key].width}
        />
      ))}
    </StyledRow>
  );
}

export default Row;
