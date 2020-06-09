import React from 'react';
import styled from 'styled-components';

interface IStylingProps {
  frozen: boolean;
  width: number;
}

interface IProps extends IStylingProps {
  columnKey: string;
  name: string;
  sortColumns: (columnKey: string) => void;
}

interface IStyledComponentProps {
  theme: IStylingProps;
}

const StyledHeaderCell = styled.th`
  background: white;
  padding: 10px 20px;
  font-size: 0.875rem;
  position: ${(props: IStyledComponentProps) => (props.theme.frozen ? 'sticky' : 'inherit')};
  right: ${(props: IStyledComponentProps) => (props.theme.frozen ? '0px' : 'inherit')};
  border-left: ${(props: IStyledComponentProps) =>
    props.theme.frozen ? '1px solid rgba(0, 0, 0, 0.22)' : 'none'};
  width: ${(props: IStyledComponentProps) =>
    props.theme.width ? props.theme.width + 'px' : '60px'};
  background-color: #f6f8f6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;

  &:hover {
    background-color: #bed5f9;
    transition: 0.3s;
    cursor: pointer;
  }
`;

function HeaderCell({ columnKey, name, frozen, sortColumns, width }: IProps) {
  return (
    <StyledHeaderCell theme={{ frozen, width }} onClick={() => sortColumns(columnKey)} title={name}>
      {name}
    </StyledHeaderCell>
  );
}

export default HeaderCell;
