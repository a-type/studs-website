import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Section', (values) => ({
  maxWidth: '100%',
  padding: values.spacing.extraLarge,
  color: values.colors.white,
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '0 auto',
  overflowX: 'hidden',
}))
.addVariant('row', {
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
})
.createSelector();

const SectionImpl = theme.connect(styled.section`
  ${spreadStyles(select)}
  display: flex;
`);

export const Section = (props) => <SectionImpl {...props} />;

SectionImpl.Row = theme.variant('row')(SectionImpl);
export default SectionImpl;
