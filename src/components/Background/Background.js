import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';
import styled, { withTheme } from 'styled-components';
import _ from 'lodash';
import Color from 'color';

const fullSize = { width: '100%', height: '100%', position: 'relative' };

const select = theme.register('Background', (values) => ({
  baseColor: values.colors.primaryContrast,
})).createSelector();

function getScrollPercent() {
  var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

class Background extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    variant: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    children: PropTypes.node,
    targetLuminosity: PropTypes.number,
  };

  static defaultProps = {
    children: null,
    targetLuminosity: 0.1,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    window.requestAnimationFrame(() => {
      if (this.div) {
        const baseColor = new Color(select('baseColor')(this.props));
        const range = Math.abs(this.props.targetLuminosity - baseColor.luminosity());
        const deltaLuminosity = (range * (getScrollPercent() / 100));
        const color = baseColor.darken(deltaLuminosity).rgb().string();
        this.div.style.backgroundColor = color;
      }
    });
  };

  render() {
    return (<div ref={(el) => this.div = el} style={fullSize}>{this.props.children}</div>);
  }
}

export default withTheme(
  theme.connect(Background)
);
