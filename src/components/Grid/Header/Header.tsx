import React from 'react';
import styled from 'styled-components';

import HeaderCell from './HeaderCell';

import { IColumn } from '../types';

interface IProps {
  columns: IColumn[];
  sortColumns: (columnKey: string) => void;
}

const StyledHeaderRow = styled.tr`
  border: 1px solid rgba(0, 0, 0, 0.22);
`;

function Header({ columns, sortColumns }: IProps) {
  return (
    <thead>
      <StyledHeaderRow>
        {columns.map(({ key, name, width }: IColumn, index: number) => (
          <HeaderCell
            width={width}
            key={key}
            columnKey={key}
            name={name}
            frozen={index === columns.length - 1}
            sortColumns={sortColumns}
          />
        ))}
      </StyledHeaderRow>
    </thead>
  );
}

export default Header;
