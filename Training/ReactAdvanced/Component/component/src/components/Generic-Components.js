import React from 'react';

const style = { border: '1px solid red', width: '100px', height: '100px', display: 'inline-block' }
export const Box = (props, { children, left, right }) => (
    <div style={style}       >

        {right}
    </div>
); 


export const BoxWithContent = () => {
    return (
        <Box>Content</Box>
    );
}

export const MultipleBoxes = () => {
    return (
        <>
            <Box left={<div>Left Box Props</div>}>Left Box Children</Box>
            <Box right={<div>Right Box Props</div>}>Right Box Children</Box>
        </>
    );
}