import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { downCounter, upCounter, login, getTodoById } from './actions';
import { bindActionCreators } from 'redux';
import {} from '../src/actions/actionTypes';
const Main = props => {
    const { counter, user, todos } = useSelector(state => state);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');

    const _onUsernameChange = event => {
        setUsername(event.target.value);
    };

    const _onIncrementPress = () => {
        dispatch(upCounter());
    };

    const _onDecrementPress = () => {
        dispatch(downCounter());
    };

    const _onLoginPress = () => {
        dispatch(getTodoById(counter));
    };

    const styles = {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        },
        form: {
            marginTop: 100,
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        counterWrapper: {
            marginTop: 50,
            justifyContent: 'space-around',
            flex: 1
        },
        title: {
            position: 'absolute',
            top: 50,
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
        },
        countText: {
            color: 'red',
            fontSize: 20,
            fontWeight: 'bold'
        }
    };
    return (
        <div className={styles.container}>
            <p className={styles.title}>Learn to use Redux-Persist!!!</p>

            <div className={styles.form}>
                <label>Username is with id {todos.id}</label>
                <input value={username} onChange={_onUsernameChange} />
                <button onClick={_onLoginPress}>Login</button>
                <div>Todos title: {todos.title}</div>
                <p>Logged ?: {user.isLogged.toString()}</p>
                <p>Username ?: {user.info ? user.info.username : ''}</p>
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

export default Main;
