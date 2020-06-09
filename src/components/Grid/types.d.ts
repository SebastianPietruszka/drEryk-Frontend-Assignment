export interface IColumn {
  key: string;
  name: string;
  width: number;
}

export interface IRow {
  [lastName: string]: string;
  [firstName: string]: string;
  [age: string]: string;
  [position: string]: string;
  [experience: string]: string;
  [localization: string]: string;
  [summary: string]: string;
}
