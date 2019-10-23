const login = userInfo => {
    return {
        type: "user/LOGIN",
        userInfo
    };
};

export { login };
