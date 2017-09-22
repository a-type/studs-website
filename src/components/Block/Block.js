import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import BlockImage from './BlockImage';

const select = theme.register('Block', (values) => ({
  background: 'white',
  color: 'black',
  size: '50px',
}))
.addVariant('small', {
  size: '25px',
})
.addVariant('large', {
  size: '100px',
}).createSelector();

const BlockImpl = theme.connect(styled.div`
  /* add your css here */
  & > svg {
    width: ${select('size', (val) => parseInt(val.replace('px', ''), 10) * 2)}px;
    height: ${select('size')};
  }

  & path {
    stroke-width: 1px !important;
    stroke: ${select('color')} !important;
    fill: ${select('background')} !important;
  }
`);

export const Block = (props) => <BlockImpl {...props}><BlockImage /></BlockImpl>;

Block.Small = theme.variant('small')(Block);
Block.Large = theme.variant('large')(Block);
export default Block;
