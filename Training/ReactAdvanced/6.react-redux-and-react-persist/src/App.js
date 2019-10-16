import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import Main from './Main';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={() => <div>..Loading</div>}
                persistor={persistor}
            >
                <Main />
            </PersistGate>
        </Provider>
    );
};

export default App;
