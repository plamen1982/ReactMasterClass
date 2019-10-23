import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

export const store = createStore(rootReducer, {}, allStoreEnhancers);

