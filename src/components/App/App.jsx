import React, { Fragment } from "react";
import { Stamp } from '../Stamp/Stamp'

const personData = {
    id: '1',
    name: 'Kat'
}

export const App = () => {
    return (
        <Fragment>
            <h1>Welcome!</h1>
            <Stamp data={personData}>Hello World</Stamp>

            <Stamp isHidden={true}>Hii</Stamp>

            <Stamp />
        </Fragment>       
    )
}
