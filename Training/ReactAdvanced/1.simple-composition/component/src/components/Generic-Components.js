import React from 'react';

export const Box = (props, children) => {
    let style = { border: '1px solid red', width: '200px', height: '100px' }
    style = {...style, ...props.width}
    return (
        <div style={style} {...props}>
            {props.children}
            {props.left}
            {props.right}
        </div>

    );
}

export const BoxWithContent = () => {
    return (
        <Box>Content</Box>
    );
}

export const MultipleBoxes = () => {
    const style = {display: 'flex'}
    return (
        <div style={style}>
            <Box width={{width: '70px'}} left={<div>Left Box Props</div>}>Left Box Children</Box>
            <Box className="skyblue-box"/>
            <Box right={<div>Right Box Props</div>}>Right Box Children</Box>
        </div>
    );
}