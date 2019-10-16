import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
    // whitelist: ['user']
};

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, {}, allStoreEnhancers);
export const persistor = persistStore(store);
