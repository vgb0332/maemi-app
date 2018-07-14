import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

// redux related book keeping
import configureStore from './Store';

// Views
import Root from './Root';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};


class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          //loading={<Loading />}
          onBeforeLift={onBeforeLift}
          persistor={persistor}
        >
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}

export default Setup;
