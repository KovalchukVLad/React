let initial = {
    counter: 0
}

const reducer = (state = initial, action) => {
    switch (action.type) {
        case 'plus': {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case 'minus': {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case 'reset': {
            return {
                ...state,
                counter: 0
            }
        }
        case 'plus100': {
            return {
                ...state,
                counter: state.counter + 100
            }
        }
        case 'minus100': {
            return {
                ...state,
                counter: state.counter - 100
            }
        }
        case 'special': {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;


