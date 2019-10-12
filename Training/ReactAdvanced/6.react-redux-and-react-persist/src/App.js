import React from "react";
import { Provider } from "react-redux";
import localforage from "localforage";
import { persistStore } from "redux-persist";

import store from "./store";
import Main from "./Main";

class App extends React.Component {
    state = {
        isReady: false
    };

    componentDidMount() {
        persistStore(
            store,
            {
                storage: localforage,
                whitelist: ["user", "counter"]
            },
            () => {
                this.setState({ isReady: true });
            }
        );
    }

    render() {
        if (!this.state.isReady) {
            return <div>...Loading</div>;
        }
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

export default App;
