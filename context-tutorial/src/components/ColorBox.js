import React, { useContext } from 'react';
import ColorContext from '../contexts/color'
import { ColorConsumer } from '../contexts/color'

const ColorBox = () => {
    const { state } = useContext(ColorContext);

    return (
        // useContext Hook 사용 (클래스형 컴포넌트에서는 사용 x)
        <>
            <div 
                style={{
                    width : '64px',
                    height : '64px',
                    backgroud : state.color
                }}
            />
            <div
                style={{
                    width : '32px',
                    height : '32px',
                    background : state.subcolor
                }}
            />
        </>

        // <ColorConsumer>
        //     {value => (
        //         <>
        //             <div
        //                 style={{
        //                     width : '64px',
        //                     height : '64px',
        //                     background : value.state.color
        //                 }}
        //             />
        //             <div
        //                 style={{
        //                     width : '32px',
        //                     height : '32px',
        //                     background : value.state.subcolor
        //                 }}
        //             />
        //         </>
        //     )}
        // </ColorConsumer>

        // <ColorContext.Consumer>
        //     {value => (
        //         <div
        //             style={{
        //                 width : '64px',
        //                 height : '64px',
        //                 background : value.color
        //             }}
        //         />
        //     )}
        // </ColorContext.Consumer>
    );
};

export default ColorBox;