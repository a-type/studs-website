import React from 'react';
import PropTypes from 'prop-types';

const getScrollHeight = () => (document.documentElement.scrollHeight || document.body.scrollHeight);
const getScrollBottom = () => getScrollHeight() - (document.documentElement.scrollTop + document.documentElement.clientHeight || document.body.scrollTop + document.body.clientHeight);
const getViewportHeight = () => (document.documentElement.clientHeight || document.body.clientHeight);

const fallRegistrations = {};

const renderLoop = () => {
  Object.values(fallRegistrations).forEach(({ startYPercent, y, element }) => {
    if (!startYPercent || !element) {
      return;
    }

    const totalScrollableDistance = getScrollHeight() - getViewportHeight();
    const remainingScrollableDistance = getScrollBottom();
    const initialBottom = getScrollHeight() * startYPercent;
    const pos =
      y
      - 1
      + (
        (remainingScrollableDistance / totalScrollableDistance)
        * (initialBottom - y)
      );
    if (Math.abs(pos - y) < 3) {
      element.style.bottom = y + 'px';
    } else {
      element.style.bottom = pos + 'px';
    }

  });
  window.requestAnimationFrame(renderLoop);
};
renderLoop();

export default class Fall extends React.Component {
  /*
               Y
               ^
               |
              / \
            /    \
          V       V
        X          Z
  */
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
    startYPercent: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.id = '' + Math.floor(Math.random() * 100000);
  }

  componentWillUnmount() {
    delete fallRegistrations[this.id];
  }

  render() {
    const { x, z, y, startYPercent, children } = this.props;

    return (
      <div
        ref={(el) => {
          if (startYPercent) {
            el.style.bottom = (getScrollHeight() * startYPercent) + 'px';
          } else {
            el.style.bottom = `${y}px`;
          }
          fallRegistrations[this.id] = { y: this.props.y, startYPercent: this.props.startYPercent, element: el };
        }}
        style={{
          position: 'absolute',
          left: `${x}px`,
          zIndex: z,
        }}
      >
        {children}
      </div>
    );
  }
}