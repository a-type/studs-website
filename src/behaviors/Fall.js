import React from 'react';
import PropTypes from 'prop-types';

const getScrollHeight = () => (document.documentElement.scrollHeight || document.body.scrollHeight);
const getScrollBottom = () => getScrollHeight() - (document.documentElement.scrollTop + document.documentElement.clientHeight || document.body.scrollTop + document.body.clientHeight);
const getViewportHeight = () => (document.documentElement.clientHeight || document.body.clientHeight);

const fallRegistrations = {};

const renderLoop = () => {
  Object.values(fallRegistrations).forEach(({ startYPercent, y, x, element }) => {
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
      element.style.transform = `translateX(${x}px) translateY(${-y}px)`;
    } else {
      element.style.transform = `translateX(${x}px) translateY(${-pos}px)`;
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
          if (!el) {
            return;
          }
          fallRegistrations[this.id] = { ...this.props, element: el };
        }}
        style={{
          position: 'relative',
          transform: `translateX(${x}px) translateY(${startYPercent ? getScrollHeight() * startYPercent : y}px)`,
          zIndex: z,
        }}
      >
        {children}
      </div>
    );
  }
}