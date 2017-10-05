import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Section', (values) => ({
  maxWidth: '100%',
  padding: values.spacing.extraLarge,
  color: values.colors.white,
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  overflow: 'visible',
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

  @media(max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`);

export const Section = (props) => <SectionImpl {...props} />;

SectionImpl.Row = theme.variant('row')(SectionImpl);
export default SectionImpl;
