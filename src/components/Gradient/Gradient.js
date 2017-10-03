import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';

const select = theme.register('Gradient', (values) => ({
  start: values.colors.primaryContrast,
  end: values.colors.primary,
})).createSelector();

const GradientImpl = theme.connect(styled.div`
  background: ${select('start')};
  background: linear-gradient(${select('start')}, ${select('end')});
  width: 100%;
  height: 100%;
  position: relative;
`);

export const Gradient = (props) => <GradientImpl {...props} />;

export default Gradient;
