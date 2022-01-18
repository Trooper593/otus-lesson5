import React, { FC } from 'react';
import Field from "./Field";

const App: FC = () => {
    return (
        <>
            <h1>Game of life</h1>
            <Field width={10} height={8}/>
        </>
    );
};

export default App;
