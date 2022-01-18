import React, {FC} from 'react';
import Item from "./Item";
import CSS from 'csstype';

export interface FieldProps {
    width: number,
    height: number
}

const Field: FC<FieldProps> = ({width, height}) => {

    const fieldStyle: CSS.Properties = {
        width: `${30 * width}px`,
        height: `${30 * height}px`,
        display: 'flex',
        flexWrap: 'wrap'
    };

    const arField = [];
    let counter = 1;
    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            arField.push(Item({num: counter, x: x, y: y, isAlive: Math.random() < 0.5}));
            counter++;
        }
    }

    return (
        <>
            <h3>width: {width} height:{height}</h3>
            <div className="field" style={fieldStyle}>
                {arField}
            </div>
        </>
    );
};

export default Field;
