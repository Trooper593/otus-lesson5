import React, {FC} from 'react';
import CSS from "csstype";

export interface ElemProps {
    num: number,
    x: number,
    y: number,
    isAlive?: boolean
}

const Item:FC<ElemProps> = ({num, x, y, isAlive}) => {

    const itemStyle: CSS.Properties = {
        width: `${30}px`,
        height: `${30}px`,
        backgroundColor: `${isAlive ? 'grey' : 'none'}`
    };

    return (
        <div id={num.toString()} style={itemStyle} key={num}></div>
    );
};

export default Item;
