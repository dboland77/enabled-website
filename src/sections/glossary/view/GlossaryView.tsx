'use client';
import Container from '@mui/material/Container';
import MainLayout from 'src/layouts/main';
import Glossary from '../Glossary';

import { VariableSizeGrid as Grid } from 'react-window';

interface ICell  {
  columnIndex : Number;
  rowIndex:Number
}
// These cell sizes are arbitrary.
// Yours should be based on the content of the cell.
const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const Cell = ({ columnIndex, rowIndex }:ICell) => (
  <div>
    {`r${rowIndex}, c${columnIndex}`}
  </div>
);

const Example = () => (
  <Grid
    className="Grid"
    columnCount={3}
    columnWidth={index => columnWidths[index]}
    height={150}
    rowCount={100}
    rowHeight={index => rowHeights[index]}
    width={300}
  >
    {Cell}
  </Grid>
);


export default function FeaturesView() {

  return (
    <MainLayout>
      <Container id="glossary">
        {/* <Glossary /> */}
        <Example/>
      </Container>
    </MainLayout>
  );
}
