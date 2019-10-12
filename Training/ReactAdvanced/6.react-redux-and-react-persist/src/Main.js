import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { downCounter, upCounter } from "./actions/counter";
import { login } from "./actions/user";
import { bindActionCreators } from "redux";

const Main = props => {
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

                <p>Logged ?: {props.user.isLogged.toString()}</p>
                <p>
                    Username ?:{" "}
                    {props.user.info ? props.user.info.username : ""}
                </p>
            </div>

            <div className={styles.counterWrapper}>
                <p>
                    The count is:{" "}
                    <p className={styles.countText}>{props.counter}</p>
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

const mapStateToProps = state => {
    return {
        counter: state.counter,
        user: state.user
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
