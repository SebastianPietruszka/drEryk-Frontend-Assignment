import React from 'react';
import styled from 'styled-components';

import Grid from './components/Grid';

const AppWrapper = styled.div`
  padding-top: 20px;
  width: 1000px;
  margin: 0 auto;
`;

const columns = [
  { key: 'firstName', name: 'First name', width: 80 },
  { key: 'lastName', name: 'Last name', width: 50 },
  { key: 'age', name: 'Age', width: 100 },
  { key: 'position', name: 'Position', width: 100 },
  { key: 'experience', name: 'Experience [years]', width: 100 },
  { key: 'localization', name: 'Localization', width: 100 },
  { key: 'summary', name: 'Summary', width: 100 },
];

const rows = [
  {
    firstName: 'Sebastian',
    lastName: 'Pietruszka',
    age: '28',
    position: 'Front-end Developer',
    experience: '3',
    localization: 'Kielce',
    summary: 'Yes',
  },
  {
    lastName: 'Nowak',
    firstName: 'Kamil',
    age: '21',
    position: 'Back-end Developer',
    experience: '2',
    localization: 'Cracow',
    summary: 'No',
  },
  {
    lastName: 'Kowalski',
    firstName: 'Jan',
    age: '24',
    position: 'Front-end Developer',
    experience: '4',
    localization: 'Warsaw',
    summary: 'Yes',
  },
];

function App() {
  return (
    <AppWrapper>
      <Grid columns={columns} rows={rows} />
    </AppWrapper>
  );
}

export default App;
