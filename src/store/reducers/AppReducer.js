const initialState = {
    appLoading: false,
    /// 
}


const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_APP_LOADING': // IS THE APP LOADING OR NOT
            return { ...state, appLoading: action.payload} // if our app is loading
        default: /// IF ITS NOT LOADING 
            return { ...state }
    }

}

export default AppReducer