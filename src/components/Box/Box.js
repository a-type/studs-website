import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Box', (values) => ({
  borderColor: values.colors.quaternary,
  background: values.colors.white,
  borderWidth: values.widths.border,
  borderStyle: values.styles.border,
  padding: values.spacing.large,
  color: values.colors.gray,
})).createSelector();

const BoxImpl = theme.connect(styled.div`
  ${spreadStyles(select)}
`);

export const Box = (props) => <BoxImpl {...props} />;

export default Box;
