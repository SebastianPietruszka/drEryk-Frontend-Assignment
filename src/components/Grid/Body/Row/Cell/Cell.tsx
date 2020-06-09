import React from 'react';
import styled from 'styled-components';

interface IStylingProps {
  frozen: boolean;
  width: number;
}

interface IProps extends IStylingProps {
  cellValue: string;
}

interface IStyledComponentProps {
  theme: IStylingProps;
}

const StyledCell = styled.td`
  padding: 10px 20px;
  background: white;
  font-size: 0.875rem;
  position: ${(props: IStyledComponentProps) => (props.theme.frozen ? 'sticky' : 'inherit')};
  right: ${(props: IStyledComponentProps) => (props.theme.frozen ? '0px' : 'inherit')};
  border-left: ${(props: IStyledComponentProps) =>
    props.theme.frozen ? '1px solid rgba(0, 0, 0, 0.12)' : 'none'};
  max-width: ${(props: IStyledComponentProps) =>
    props.theme.width ? props.theme.width + 'px' : '60px'};
  min-width: ${(props: IStyledComponentProps) =>
    props.theme.width ? props.theme.width + 'px' : '60px'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Cell({ cellValue, frozen, width }: IProps) {
  return (
    <StyledCell theme={{ frozen, width }} title={cellValue}>
      {cellValue}
    </StyledCell>
  );
}

export default Cell;
