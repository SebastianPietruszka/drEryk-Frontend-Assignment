import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import Cell from './Cell';

import { IColumn, IRow } from '../../types';

interface IProps {
  columnsKeys: string[];
  row: IRow;
  columnsByKeys: {
    [key: string]: IColumn;
  };
  animation: boolean;
}
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }`;

const StyledRow = styled.tr`
  border: 1px solid rgba(0, 0, 0, 0.12);
  animation: ${props =>
    props.theme.animation === true
      ? css`
          ${fadeIn} 0.5s
        `
      : ''};
`;

function Row({ columnsKeys, row, columnsByKeys, animation }: IProps) {
  return (
    <StyledRow theme={{ animation }}>
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
