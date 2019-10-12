const upCounter = () => {
    return {
        type: "counter/UP"
    };
};

const downCounter = () => {
    return {
        type: "counter/DOWN"
    };
};

export { upCounter, downCounter };
