import React, {createContext, useReducer} from 'react';

export const StoreContext = createContext(createInitialState());

function createInitialState() {
    return {
        rules       : [],
        selectedRule: null
    };
}

export function createStoreProvider() {
    return ({children}) => {
        let [state, dispatch] = useReducer((state, action) => {
            return {
                rules       : state.rules,
                selectedRule: state.selectedRule
            };
        }, createInitialState());

        // A component calling useContext will always re-render when the context value changes.
        return <StoreContext.Provider value={{dispatch, state}}>{children}</StoreContext.Provider>;
    };
}
