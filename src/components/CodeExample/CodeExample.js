import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link';
import Collapse from 'react-collapse';
import SyntaxHighlighter from 'react-syntax-highlighter';
import coloring from 'react-syntax-highlighter/dist/styles/atom-one-dark';

const select = theme.register('CodeExample', (values) => ({
  margin: `${values.spacing.medium} 0 0 0`,
})).createSelector();

const Container = theme.connect(styled.div`
  margin: ${select('margin')};
  width: 100%;
  text-align: center;
`);

const Content = theme.connect(styled.div`
  overflow-x: auto;
  text-align: left;
`);

export default class CodeExample extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    expanded: false,
  };

  toggle = () => this.setState({ expanded: !this.state.expanded });

  renderToggle = () => <Link onClick={this.toggle}>{this.state.expanded ? 'Hide Code' : 'Show Code'}</Link>;

  render() {
    return (
      <Container>
        {this.renderToggle()}
        <Collapse isOpened={this.state.expanded}>
          <Content>
            <SyntaxHighlighter language={this.props.language} style={coloring}>
              {this.props.children}
            </SyntaxHighlighter>
          </Content>
        </Collapse>
      </Container>
    );
  }
}
