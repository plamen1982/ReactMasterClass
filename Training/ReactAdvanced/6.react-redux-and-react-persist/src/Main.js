import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { downCounter, upCounter } from "./actions/counter";
import { login } from "./actions/user";
import { bindActionCreators } from "redux";

const Main = props => {
    const { counter, user } = useSelector(state => state);
    const [username, setUsername] = useState("");

    const _onUsernameChange = event => setUsername(event.target.value);

    const _onIncrementPress = () => props.upCounter();

    const _onDecrementPress = () => props.downCounter();

    const _onLoginPress = () => props.login({ username });

    const styles = {
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
        },
        form: {
            marginTop: 100,
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center"
        },
        counterWrapper: {
            marginTop: 50,
            justifyContent: "space-around",
            flex: 1
        },
        title: {
            position: "absolute",
            top: 50,
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center"
        },
        countText: {
            color: "red",
            fontSize: 20,
            fontWeight: "bold"
        }
    };
    return (
        <div className={styles.container}>
            <p className={styles.title}>Learn to use Redux-Persist!!!</p>

            <div className={styles.form}>
                <label>Username</label>
                <input value={username} onChange={_onUsernameChange} />
                <button onClick={_onLoginPress}>Login</button>

                <p>Logged ?: {user.isLogged.toString()}</p>
                <p>Username ?: {user.info ? user.info.username : ""}</p>
            </div>

            <div className={styles.counterWrapper}>
                <p>
                    The count is: <p className={styles.countText}>{counter}</p>
                </p>
                <button onClick={_onIncrementPress}>Increment</button>
                <button onClick={_onDecrementPress}>Decrement</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            downCounter,
            upCounter,
            login
        },
        dispatch
    );
};

export default connect(
    null,
    mapDispatchToProps
)(Main);
