import React, { Component } from "react";
// import { div, p, StyleSheet } from "react-native";
// import { label, input, button } from "react-native-elements";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { downCounter, upCounter } from "./actions/counter";
import { login } from "./actions/user";

class Main extends Component {
    state = {
        username: ""
    };

    _onUsernameChange = username => this.setState({ username });

    _onIncrementPress = () => this.props.upCounter();

    _onDecrementPress = () => this.props.downCounter();

    _onLoginPress = () => this.props.login({ username: this.state.username });

    render() {
        const useStyles = makeStyles({
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
        });
        const styles = useStyles();
        return (
            <div className={styles.container}>
                <p className={styles.title}>Learn to use Redux-Persist!!!</p>

                <div className={styles.form}>
                    <label>Username</label>
                    <input
                        value={this.state.username}
                        onChangeText={this._onUsernameChange}
                    />
                    <button onPress={this._onLoginPress} title="Login" />

                    <p>Logged ?: {this.props.user.isLogged.toString()}</p>
                    <p>
                        Username ?:{" "}
                        {this.props.user.info
                            ? this.props.user.info.username
                            : ""}
                    </p>
                </div>

                <div className={styles.counterWrapper}>
                    <p>
                        The count is:{" "}
                        <p className={styles.countText}>{this.props.counter}</p>
                    </p>
                    <button onClick={this._onIncrementPress}> Increment</button>
                    <button onClick={this._onDecrementPress}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
        counter: state.counter
    }),
    { downCounter, upCounter, login }
)(Main);
