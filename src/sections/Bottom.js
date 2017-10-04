import React from 'react';
import Fall from '../behaviors/Fall';
import Block from '../components/Block';
import Logo from '../components/Logo';
import theme from '../theme';

const BLOCK_SIZE = 50;
const BLOCK_HEIGHT = BLOCK_SIZE / 3;
const BLOCK_WIDTH = (BLOCK_SIZE * 2) * (1 / 4.4);
const BASE_HEIGHT = 50;
const BASE_LEFT = 50;

const calcX = (x, y, z) => BASE_LEFT + (x - (z * 2)) * BLOCK_WIDTH;
const calcY = (x, y, z) =>
  BASE_HEIGHT
  + y * BLOCK_HEIGHT
  + ((baseGrid.length - x) * (BLOCK_HEIGHT * 0.75))
  + ((baseGrid[0].length - z) * (BLOCK_HEIGHT * 1.25));
const calcZ = (x, y, z) => x + z;

theme.registerVariant('Block', 'footer', { size: `${BLOCK_SIZE}px` });

const SizedBlock = theme.variant('footer')(Block);

const baseGrid = [
  [
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
  ],
  [
    [true, true, true, true, true, true, true],
    [true, true, true, false, false, true, true],
  ],
  [
    [true, true, true, false, false, true, true],
    [true, true, false, false, false, true, true],
  ],
  [
    [true, true, false, false, false, true, true],
    [true, false, false, false, false, false, true],
  ],
];

const falling = [
  { x: 3, y: 1, z: 1, startY: 1.12 },
  { x: 4, y: 1, z: 1, startY: 1.05 },
  { x: 3, y: 2, z: 0, startY: 1.6 },
  { x: 4, y: 2, z: 0, startY: 1.2 },
  { x: 2, y: 2, z: 1, startY: 1.02 },
  { x: 3, y: 2, z: 1, startY: 1.3 },
  { x: 4, y: 2, z: 1, startY: 1.14 },
  { x: 2, y: 3, z: 0, startY: 1.2 },
  { x: 3, y: 3, z: 0, startY: 1.8 },
  { x: 4, y: 3, z: 0, startY: 1.75 },
  { x: 1, y: 3, z: 1, startY: 1.6 },
  { x: 2, y: 3, z: 1, startY: 1.4 },
  { x: 3, y: 3, z: 1, startY: 1.72 },
  { x: 4, y: 3, z: 1, startY: 1.66 },
  { x: 5, y: 3, z: 1, startY: 1.82 },
];

const createBaseBlocks = () => baseGrid.reduce((list, rows, yIndex) =>
  list.concat(rows.reduce((list2, row, zIndex) =>
    list2.concat(row.map((blockPresent, xIndex) => {
      if (blockPresent) {
        return (<SizedBlock
          key={`${xIndex}${yIndex}${zIndex}`}
          style={{
            position: 'absolute',
            left: `${calcX(xIndex, yIndex, zIndex)}px`,
            bottom: `${calcY(xIndex, yIndex, zIndex)}px`,
            zIndex: calcZ(xIndex, yIndex, zIndex),
          }}
        />);
      }
      return null;
    })),
    []
  )),
  []
);

const createFallingBlocks = () => falling.reduce((list, props) => ([
  ...list,
  (<Fall
    key={`${props.x}${props.y}${props.z}`}
    x={calcX(props.x, props.y, props.z)}
    y={calcY(props.x, props.y, props.z)}
    z={calcZ(props.x, props.y, props.z)}
    startYPercent={props.startY}
  >
    <SizedBlock />
  </Fall>),
]), []);

export default () => (
  <div style={{ paddingLeft: '300px' }}>
    {createBaseBlocks()}
    {createFallingBlocks()}
  </div>
);