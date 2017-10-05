import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import { spreadStyles } from 'react-studs';

const select = theme.register('Article', (values) => ({
  sectionFlex: '1 1 auto',
  padding: values.spacing.extraLarge,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  zIndex: '1000',
  position: 'relative',
  margin: '0 auto',
  width: '100%',
})).createSelector();

const ArticleImpl = theme.connect(styled.article`
  ${spreadStyles(select)}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > section {
    flex: ${select('sectionFlex')};
  }

  @media(max-width: 600px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`);

export const Article = (props) => <ArticleImpl {...props} />;

export default Article;
