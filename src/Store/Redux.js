import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

class Redux extends PureComponent {
  store = createStore((state) => state);

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

Redux.propTypes = {};

export default Redux;
