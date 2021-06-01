import React, {createContext, useReducer} from 'react';

import {rules, selectedRule} from './reducers';

export const StoreContext = createContext(null);

export function createInitialState() {
    return {
        rules       : [],
        selectedRule: null
    };
}

/**
 * Experimental build to represent the possibility to have lightweight Store solution with centralized reducer like Redux
 */
export function createStore(initialState) {
    let state, dispatch;

    function invalidate() {
        let [currentState, dispatchRef] = useReducer((state, action) => {
            return {
                rules       : rules(state.rules, action),
                selectedRule: selectedRule(state.selectedRule, action)
            };
        }, initialState);

        state = currentState;
        dispatch = dispatchRef;
    }

    return {
        dispatch  : action => dispatch(action),
        getState  : () => state,
        invalidate: () => invalidate()
    };
}

export function createStoreProvider(store) {
    return ({children}) => {
        store.invalidate();

        // A component calling useContext will always re-render when the context value changes.
        return <StoreContext.Provider value={{store}}>{children}</StoreContext.Provider>;
    };
}
