import React, { useState, ReactNode } from 'react';
import AppContext from "./Context";

const initialColors = {

}

type Props = {
    children: ReactNode;
}

export const AppProvider = ({children}: Props) => {

    const [colors, setColors] = useState(initialColors);

    return(
        <AppContext.Provider value={{ colors, setColors }}>
            {children}
        </AppContext.Provider>
    )

}


