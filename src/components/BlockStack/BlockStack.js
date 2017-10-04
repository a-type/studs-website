import React from 'react';
import Fall from '../../behaviors/Fall';
import Block from '../Block';
import theme from '../../theme';

const BLOCK_SIZE = 50;
const BLOCK_HEIGHT = BLOCK_SIZE / 3;
const BLOCK_WIDTH = (BLOCK_SIZE * 2) * (1 / 4.4);

const calcX = (x) => x * BLOCK_WIDTH;
const calcY = (y) => -BLOCK_HEIGHT * y * 2;
const calcZ = (x, y, z) => x + y + z;
const calcPos = (x, y, z) => ({
  x: calcX(x),
  y: calcY(y),
  z: calcZ(x, y, z),
});

theme.registerVariant('Block', 'footer', { size: `${BLOCK_SIZE}px` });

const DefaultBlock = theme.variant(['footer'])(Block);
const PrimaryBlock = theme.variant(['footer', 'primary'])(Block);
const SecondaryBlock = theme.variant(['footer', 'secondary'])(Block);
const TertiaryBlock = theme.variant(['footer', 'tertiary'])(Block);
const QuaternaryBlock = theme.variant(['footer', 'quaternary'])(Block);

export default () => (
  <div style={{ overflow: 'visible' }}>
    <Fall {...calcPos(0, 4, 0)} startYPercent={2.25}><QuaternaryBlock /></Fall>
    <Fall {...calcPos(0, 3, 0)} startYPercent={1.75}><TertiaryBlock /></Fall>
    <Fall {...calcPos(0, 2, 0)} startYPercent={1.5}><SecondaryBlock /></Fall>
    <Fall {...calcPos(0, 1, 0)} startYPercent={1}><PrimaryBlock /></Fall>
    <DefaultBlock />
  </div>
);