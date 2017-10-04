import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';

const select = theme.register('Gradient', (values) => ({
  start: values.colors.primary,
  end: values.colors.quaternary,
})).createSelector();

const GradientImpl = theme.connect(styled.div`
  background: ${select('start')};
  background: linear-gradient(${select('start')}, ${select('end')});
  width: 100%;
  height: 100%;
  transition: 0.2s all;
`);

export const Gradient = (props) => <GradientImpl {...props} />;

export default Gradient;
