

const Reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'buy': {
            state.items.push({ ...action.payload })
            console.log(state.items);
            return {
                ...state,
                items: state.items,
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}

export default Reducer;