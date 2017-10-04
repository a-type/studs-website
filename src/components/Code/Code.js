import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Code', (values) => ({
  borderColor: values.colors.quaternary,
  borderWidth: values.widths.border,
  borderStyle: values.styles.border,
  borderRadius: '4px',
  color: values.colors.quaternary,
  background: values.colors.white,
  margin: `0 ${values.spacing.small}`,
  padding: values.spacing.small,
})).createSelector();

const CodeImpl = theme.connect(styled.pre`
  ${spreadStyles(select)}
  display: inline-block;
`);

export const Code = (props) => <CodeImpl {...props} />;

export default Code;
